import { Container } from "./styles";
import Lottie from "react-lottie";
import HomeImg from "../../assets/lotties/home_img.json";

import { Redirect } from "react-router-dom";

import { useAccount } from "../../providers/accounts";

const lottieOptions = {
  loop: true,

  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Home = () => {
  const { token } = useAccount();

  if (token) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <div className="textContainer">
        <h1>WhaleClub</h1>
        <h2>
          Organize seus livros, crie metas e conheça novos grupos de leitura
        </h2>
      </div>
      <div className="imgContainer">
        <Lottie options={{ ...lottieOptions, animationData: HomeImg }} />
      </div>
    </Container>
  );
};

export default Home;
