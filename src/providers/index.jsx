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
          <BooksProvider>
            <GroupsProvider>{children}</GroupsProvider>
          </BooksProvider>
        </FriendsProvider>
      </AccountProvider>
    </NotificationsProvider>
  );
};
export default Providers;
