import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { useAccount } from "../accounts";
import { NotificationsContext } from "../notifications";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [userGroups, setUserGroups] = useState([]);
  const [userOwnedGroups, setUserOwnedGroups] = useState([]);
  const [groupsRequest, setGroupsRequest] = useState([]);
  const [usersInGroup, setUsersInGroup] = useState([]);
  const {} = useContext(NotificationsContext);
  const { token, userId } = useAccount();

  const getUserGroups = () => {
    api
      .get("api/groups/my_groups/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserGroups(res.data);
        let ownedGroups = [];
        for (let g in res.data) {
          if (g.group.leader.id === userId) {
            ownedGroups.push(g);
          }
        }
        setUserOwnedGroups(ownedGroups);
      });
  };

  const getGroups = () => {
    api
      .get("api/groups/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGroups(res.data);
      });
  };

  useEffect(() => {
    getUserGroups();
    getGroups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const getGroupsRequest = (groupId) => {
    api
      .get(`api/groups/${groupId}/request_users/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGroupsRequest(res.data);
      });
  };

  const membersInGroup = (groupId) => {
    api
      .post(`api/groups/${groupId}/members/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUsersInGroup(res.data);
      });
  };

  const acceptMemberInGroup = (groupId, requestUserId) => {
    api
      .post(`api/groups/${groupId}/accept_member/${requestUserId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        getGroupsRequest(groupId);
        membersInGroup(groupId);
      });
  };

  const removeMemberFromGroup = (groupId, memberId) => {
    api
      .post(`api/groups/${groupId}/remove_member/${memberId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        membersInGroup(groupId);
      });
  };

  return (
    <GroupsContext.Provider
      value={{
        removeMemberFromGroup,
        acceptMemberInGroup,
        membersInGroup,
        getGroupsRequest,
        getGroups,
        getUserGroups,
        groups,
        userOwnedGroups,
        userGroups,
        groupsRequest,
        usersInGroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
