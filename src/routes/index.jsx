import { Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./protected";
import AllBooksPage from "../pages/AllBooks";

const Routes = () => {
  return (
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute component={Signin} path="/signin" />
      <ProtectedRoute component={Signup} path="/signup" />
      <ProtectedRoute component={Dashboard} path="/dashboard" isPrivate />
      <ProtectedRoute component={AllBooksPage} path="/allbooks" isPrivate />
      <ProtectedRoute path="/404" component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  );
};
export default Routes;
