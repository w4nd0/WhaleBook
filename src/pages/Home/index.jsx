import { Container } from "./styles";
import Lottie from "react-lottie";
import HomeImg from "../../assets/lotties/home_img.json";

const lottieOptions = {
  loop: true,

  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Home = () => {
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
