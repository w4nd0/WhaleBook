import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { NotificationsContext } from "../notifications";

export const AccountContext = createContext([]);

export const AccountProvider = ({ children }) => {
  const [userId, setUserId] = useState(0);
  const [username, setUsername] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [token, setToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const { registerError, registerSuccess, loginError, loginSuccess } =
    useContext(NotificationsContext);

  //   useEffect(() => {
  //     const storageToken = localStorage.getItem("@WhaleBooks:token") || "";
  //     if (storageToken) {
  //       setToken(storageToken);
  //       api
  //         .get("api/user/", {
  //           headers: {
  //             Authorization: `Bearer ${storageToken}`,
  //           },
  //         })
  //         .then((res) => {
  //           setUserId(res.id);
  //           setUsername(res.username);
  //         });
  //     }
  //   }, []);

  useEffect(() => {
    getAllUsers();
    const storageRefreshToken =
      localStorage.getItem("@WhaleBooks:refresh") || "";
    let data = { refresh: storageRefreshToken };
    if (storageRefreshToken) {
      api.post("api/refresh/", data).then((res) => {
        setToken(res.data.access);
      });
    }
  }, []);

  useEffect(() => {
    api
      .get("api/user/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserId(res.id);
        setUsername(res.username);
      })
      .catch((_) => loginError());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

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

  const getAllUsers = () => {
    api
      .get("api/users/")
      .then((res) => {
        setAllUsers(res.data);
      })
      .catch((_) => {
        return { error: "try again" };
      });
  };

  const getUserById = (id) => {
    api
      .get(`api/users/${id}/`)
      .then((res) => {
        return res.data;
      })
      .catch((_) => {
        return {};
      });
  };

  return (
    <AccountContext.Provider
      value={{
        loginUser,
        createAccount,
        token,
        userId,
        username,
        allUsers,
        getUserById,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => useContext(AccountContext);
