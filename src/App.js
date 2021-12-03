import Aside from "./components/Aside";
import Header from "./components/Header";
import Routes from "./routes";
import { GlobalStyles } from "./styles/global";
import { useAccount } from "./providers/accounts";

function App() {
  const { token } = useAccount();
  return (
    <>
      <Header />
      {token && <Aside />}
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App;
