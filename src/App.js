import { ProSidebar } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <p>oiadadasdadadd</p>
      <ProSidebar
        style={{ height: "100vh" }}
        image="https://wallpaperaccess.com/full/124383.jpg"
      >
        {/* <Menu iconShape="square">
          <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
          <SubMenu title="Components" icon={<FaHeart />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu> */}
      </ProSidebar>
    </>
  );
}

export default App;
