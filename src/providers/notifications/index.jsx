import { createContext } from "react";
import { notification } from "antd";
import "antd/dist/antd.css";
import "./styles.css";

export const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const registerSuccess = () => {
    notification.success({
      message: <h3>Cadastro com sucesso!</h3>,
      description: <p>Agora é só fazer o login.</p>,
      icon: <span>🥳</span>,
      className: "success",
    });
  };

  const registerError = () => {
    notification.error({
      message: <h3>OOPS!</h3>,
      description: <p>Algo deu errado no cadastro.</p>,
      icon: <span>🥲</span>,
      className: "error",
    });
  };

  const loginSuccess = () => {
    notification.success({
      message: <h3>Boa leitura!</h3>,
      description: <p>Não deixe de participar de algum grupo.</p>,
      icon: <span>"📚"</span>,
      className: "success",
    });
  };

  const loginError = () => {
    notification.error({
      message: <h3>Deu erro!</h3>,
      description: <p>Verificar usuário ou senha.</p>,
      icon: <span>"🔒"</span>,
      className: "error",
    });
  };

  const logoutSuccess = () => {
    notification.success({
      message: <h3>Até logo!</h3>,
      description: <p>Espero te ver em breve!</p>,
      icon: <span>"🐳"</span>,
      className: "success",
    });
  };

  return (
    <NotificationsContext.Provider
      value={{
        registerSuccess,
        registerError,
        logoutSuccess,
        loginError,
        loginSuccess,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
