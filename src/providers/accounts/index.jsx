import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { NotificationsContext } from "../notifications";

export const AccountContext = createContext([]);

export const AccountProvider = ({ children }) => {
  const [userId, setUserId] = useState(0);
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const { registerError, registerSuccess, loginError, loginSuccess } =
    useContext(NotificationsContext);

  useEffect(() => {
    const storageToken = localStorage.getItem("@WhaleBooks:token") || "";
    if (storageToken) {
      setToken(storageToken);
      api
        .get("api/user/", {
          headers: {
            Authorization: `Bearer ${storageToken}`,
          },
        })
        .then((res) => {
          setUserId(res.id);
          setUsername(res.username);
        });
    }
  }, []);

  const createAccount = async (data) => {
    try {
      await api.post("api/accounts/", data);
      registerSuccess();
      return true;
    } catch {
      registerError();
      return false;
    }
  };

  const loginUser = async (data) => {
    try {
      const res = await api.post("api/login/", data);
      localStorage.setItem("@WhaleBooks:token", res.data.access);
      localStorage.setItem("@WhaleBooks:refresh", res.data.refresh);
      setToken(res.data.access);
      setRefreshToken(res.data.refresh);
      loginSuccess();
      return true;
    } catch {
      loginError();
      return false;
    }
  };

  return (
    <AccountContext.Provider
      value={{
        loginUser,
        createAccount,
        token,
        userId,
        username,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => useContext(AccountContext);
