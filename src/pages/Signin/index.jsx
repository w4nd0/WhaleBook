import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, FormContainer, Content, Error } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Redirect, useHistory } from "react-router-dom";

import { useAccount } from "../../providers/accounts";
import Lottie from "react-lottie";
import Books from "../../assets/lotties/books_img.json";

const lottieOptions = {
  loop: true,

  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Signin = () => {
  const { loginUser } = useAccount();

  const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório!"),

    password: yup
      .string()
      .min(3, "Mínimo de 3 digitos")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFunction = async (data) => {
    delete data["confirmPassword"];
    delete data["confirmEmail"];
    console.log(data);
    const sucessRegister = await loginUser(data);

    if (sucessRegister) {
      history.push("/dashboard");
    }
  };

  //   if (authenticated) {
  //     return <Redirect to="/dashboard" />;
  //   }

  return (
    <Container>
      <FormContainer>
        <Content>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Entrar</h1>

            <div className="inputContainer">
              <Input
                register={register}
                name="email"
                label="Email"
                placeholder="Digite seu email"
                error={errors.email?.message}
              />

              <Error>{errors.email?.message}</Error>
            </div>

            <div className="inputContainer">
              <Input
                register={register}
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
                error={errors.password?.message}
              />
              <Error>{errors.password?.message}</Error>
            </div>

            <p className="loginMessage">
              Não possui conta? <Link to="/signup">Registre-se aqui</Link>
            </p>
            <div>
              <Button type="submit">Entrar</Button>
            </div>
          </form>
        </Content>
      </FormContainer>
      <div className="imgContainer">
        <Lottie options={{ ...lottieOptions, animationData: Books }} />
      </div>
    </Container>
  );
};

export default Signin;
