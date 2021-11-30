import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
// import { useUser } from "../providers/User";

const ProtectedRoute = ({
  isPrivate = true,
  component: Component,
  ...rest
}) => {
  //   const { userToken } = useUser();
  const userToken = true;
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!userToken ? (
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
