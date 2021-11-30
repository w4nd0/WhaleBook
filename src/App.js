import Aside from "./components/Aside";
import Routes from "./routes";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <Routes />
      <Aside />
      <GlobalStyles />
    </>
  );
}

export default App;
