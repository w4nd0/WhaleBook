import { CustomHeader } from "./styles";
import WhaleIcon from "../../assets/svg/whale_icon.svg";
import Button from "../Button";
import Input from "../Input";
import { useHistory, useLocation } from "react-router";
const Header = () => {
  const authenticated = false;
  const { pathname } = useLocation();
  const history = useHistory();

  const handleLocation = (location) => {
    history.push(`/${location}`);
  };

  return (
    <CustomHeader>
      {authenticated ? (
        <div>
          <div className="wrap" onClick={() => handleLocation("")}>
            <img src={WhaleIcon} alt="" />
            <h1>WhaleBook</h1>
          </div>
          <Input type="text" placeholder="Procure um livro" />
          <Button>Sair</Button>
        </div>
      ) : (
        <>
          <div className="wrap" onClick={() => handleLocation("")}>
            <img src={WhaleIcon} alt="" />
            <h1>WhaleBook</h1>
          </div>
          <div className="buttonWrap">
            <Button
              whiteSchema={pathname === "/signin" ? true : false}
              className="btb-login"
              onClickFunc={() => handleLocation("signin")}
            >
              Login
            </Button>
            <Button
              whiteSchema={pathname === "/signup" ? true : false}
              className="btb-signup"
              onClickFunc={() => handleLocation("signup")}
            >
              Cadastro
            </Button>
          </div>
        </>
      )}
    </CustomHeader>
  );
};

export default Header;
