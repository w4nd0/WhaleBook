import { AccountProvider } from "./accounts";
import { FriendsProvider } from "./friends";
import { NotificationsProvider } from "./notifications";

const Providers = ({ children }) => {
  return (
    <NotificationsProvider>
      <AccountProvider>
        <FriendsProvider>{children}</FriendsProvider>
      </AccountProvider>
    </NotificationsProvider>
  );
};
export default Providers;
