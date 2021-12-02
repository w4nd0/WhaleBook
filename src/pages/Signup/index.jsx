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
const Signup = () => {
  const { createAccount } = useAccount();

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório!"),
    confirmEmail: yup
      .string()
      .oneOf([yup.ref("email")], "E-mails diferentes")
      .required("Campo obrigatório!"),
    password: yup
      .string()
      .min(3, "Mínimo de 3 digitos")
      .required("Campo obrigatório!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
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
    const sucessRegister = await createAccount(data);

    if (sucessRegister) {
      history.push("/signin");
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
            <h1>Cadastre-se</h1>
            <div className="inputContainer">
              <Input
                register={register}
                name="username"
                label="Nome"
                placeholder="Nome de usuário"
                error={errors.username?.message}
              />
              <Error>{errors.username?.message}</Error>
            </div>
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
                name="confirmEmail"
                label="Confirme seu email"
                placeholder="Confirme seu e-mail"
                error={errors.confirmEmail?.message}
              />
              <Error>{errors.confirmEmail?.message}</Error>
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

            <div className="inputContainer">
              <Input
                register={register}
                type="password"
                label="Confirme sua senha"
                name="confirmPassword"
                placeholder="Confirme sua senha"
                error={errors.confirmPassword?.message}
              />
              <Error>{errors.confirmPassword?.message}</Error>
            </div>

            <p className="loginMessage">
              Já possui conta? <Link to="/signin">Faça login aqui.</Link>
            </p>
            <div>
              <Button type="submit">Cadastrar</Button>
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

export default Signup;
