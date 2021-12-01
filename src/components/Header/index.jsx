import { CustomHeader } from "./styles";
import WhaleIcon from "../../assets/svg/whale_icon.svg";
import Button from "../Button";
import Input from "../Input";

const Header = () => {
  return (
    <CustomHeader>
      <div className="wrap">
        <img src={WhaleIcon} alt="" />
        <h1>WhaleBook</h1>
      </div>
      <Input type="text" placeholder="Procure um livro" />
      <Button>Sair</Button>
    </CustomHeader>
  );
};

export default Header;
