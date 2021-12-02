import { AccountProvider } from "./accounts";
import { BooksProvider } from "./books";
import { FriendsProvider } from "./friends";
import { GroupsProvider } from "./groups";
import { NotificationsProvider } from "./notifications";

const Providers = ({ children }) => {
  return (
    <NotificationsProvider>
      <AccountProvider>
        <FriendsProvider>
          <BooksProvider>{children}</BooksProvider>
        </FriendsProvider>
      </AccountProvider>
    </NotificationsProvider>
  );
};
export default Providers;
