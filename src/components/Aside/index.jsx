import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

import { CustomSideBar, CustomHeader, CustomMenu } from "./styles";
import { FaGem, FaHeart } from "react-icons/fa";
import { RiBook3Fill, RiSearch2Line, RiGroupFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { GiThreeFriends } from "react-icons/gi";
import BooksIcon from "../../assets/svg/books_icon.svg";
import "react-pro-sidebar/dist/css/styles.css";
import WhaleIcon from "../../assets/svg/whale_icon.svg";
import { NavLink, useHistory, useLocation } from "react-router-dom";

const Aside = () => {
  const history = useHistory();
  const Redirect = (path) => {
    history.push(path);
  };

  return (
    <CustomSideBar image="https://wallpaperaccess.com/full/124383.jpg">
      <CustomHeader>
        <div className="imgBox">
          <img src={WhaleIcon} alt="" />
        </div>
        <h2>Nome do usuário</h2>
        <div className="pagBox">
          <p>10000</p>
          <p>Paginômetro</p>
        </div>
      </CustomHeader>
      <SidebarContent>
        <CustomMenu iconShape="square">
          <SubMenu
            title="Meus livros"
            icon={<img src={BooksIcon} alt="books" />}
          >
            <MenuItem
              icon={<RiBook3Fill />}
              onClick={() => Redirect("/allbooks")}
            >
              Todos
            </MenuItem>
            <MenuItem icon={<RiBook3Fill />}>Lendo</MenuItem>
            <MenuItem icon={<RiBook3Fill />}>Lidos</MenuItem>
            <MenuItem icon={<RiBook3Fill />}>Lista de desejos</MenuItem>
          </SubMenu>
          <SubMenu title="Grupos" icon={<RiGroupFill />}>
            <MenuItem icon={<RiSearch2Line />}>Descobrir</MenuItem>
            <MenuItem
              icon={<BsFillPersonFill />}
              onClick={() => Redirect("/groups")}
            >
              Meus grupos
            </MenuItem>
          </SubMenu>
          <SubMenu title="Components" icon={<GiThreeFriends />}>
            <MenuItem icon={<RiSearch2Line />}>Descobrir</MenuItem>
            <MenuItem icon={<BsFillPersonFill />}>Meus amigos</MenuItem>
          </SubMenu>
        </CustomMenu>
      </SidebarContent>
    </CustomSideBar>
  );
};

export default Aside;
