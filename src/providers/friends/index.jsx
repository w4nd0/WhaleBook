import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { useAccount } from "../accounts";

export const FriendsContext = createContext();

export const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [friendRequests, setFriendRequests] = useState([]);
  const { token } = useAccount();

  useEffect(() => {
    api
      .get("", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setFriends(res.data);
        setFriendRequests(res.data);
      });
  }, [token]);

  const sendFriendRequest = (data, friend_id) => {
    api.post("").then((res) => {});
  };

  const answerFriendRequest = (data, answer, friend_id) => {
    api
      .post("")
      .then((res) => {})
      .catch(() => {});
  };

  return (
    <FriendsContext.Provider
      value={{
        answerFriendRequest,
        sendFriendRequest,
        friendRequests,
        friends,
      }}
    >
      {children}
    </FriendsContext.Provider>
  );
};

export const useFriends = () => useContext(FriendsContext);
