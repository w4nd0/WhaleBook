import { createContext, useCallback, useContext, useState } from "react";
import api from "../../services";
import { useAccount } from "../accounts";

export const FriendsContext = createContext();

export const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [sentFriendsRequests, setSentFriendsRequests] = useState([]);
  const [receivedFriendsRequests, setReceivedFriendsRequests] = useState([]);
  const { token } = useAccount();

  const getFriendsAndRequests = useCallback(() => {
    api
      .get("api/user/friends/requests/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setSentFriendsRequests(res.data.sent_requests);
        setReceivedFriendsRequests(res.data.received_requests);
      });
    api
      .get("api/user/friends/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setFriends(res.data);
      });
  }, [token]);

  const sendFriendRequest = (action, friend_id) => {
    //caso o usuário queira solicitar uma amizade, passar no parâmetro action
    //o verbo 'add', caso contrário passar o verbo 'cancel'
    if (action === "add") {
      api
        .post(`api/user/friends/requests/${friend_id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setSentFriendsRequests(res.data));
    }
    if (action === "cancel") {
      api
        .delete(`api/user/friends/requests/${friend_id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_) => getFriendsAndRequests());
    }
  };

  const answerFriendRequest = (answer, friend_id) => {
    //caso o usuário queira aceitar pedido de amizade, passar no parâmetro
    // 'answer' o verbo 'add', caso contrário passar o verbo 'cancel'
    if (answer === "add") {
      api
        .post(`api/user/friends/${friend_id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => getFriendsAndRequests());
    }
    if (answer === "cancel") {
      api
        .delete(`api/user/friends/${friend_id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_) => getFriendsAndRequests());
    }
  };

  return (
    <FriendsContext.Provider
      value={{
        answerFriendRequest,
        sendFriendRequest,
        getFriendsAndRequests,
        friends,
        sentFriendsRequests,
        receivedFriendsRequests,
      }}
    >
      {children}
    </FriendsContext.Provider>
  );
};

export const useFriends = () => useContext(FriendsContext);
