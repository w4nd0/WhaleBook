import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import { useAccount } from "../providers/accounts";

const ProtectedRoute = ({
  isPrivate = true,
  component: Component,
  ...rest
}) => {
  //   const { token } = useAccount();
  const token = true;

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
