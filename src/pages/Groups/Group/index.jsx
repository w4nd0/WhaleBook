import { useParams } from "react-router-dom";
import api from "../../../services/api";
import { useEffect, useState } from "react";
import { Container, Head, Goals, CardGoal, Users } from "./styles";
import { Typography } from "@mui/material";

const Group = () => {
  const { id } = useParams();
  const [group, setGroup] = useState("");
  const [goals, setGoals] = useState([]);

  const getGroup = () => {
    api
      .get(`/groups/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setGroup(response.data));
  };

  const getGoals = () => {
    api
      .get(`/groups/${id}/goals/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setGoals(response.data));
  };

  useEffect(() => {
    getGroup();
    getGoals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container
        style={{
          paddingLeft: "310px",
          paddingTop: "10px",
          marginTop: "0px",
        }}
      >
        <Head>
          <img src="https://picsum.photos/100/150" alt="Imagem do grupo" />
          <div className="textHead">
            <Typography
              variant="h4"
              style={{
                fontFamily: '"Poppins", sans-serif',
              }}
              color="text.primary"
              component="h1"
            >
              {group.name}
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: '"Poppins", sans-serif',
              }}
              color="text.primary"
              component="p"
            >
              {group.description}
            </Typography>
          </div>
        </Head>
        <Goals>
          <Typography
            variant="h5"
            style={{
              margin: "25px 0px 25px 350px",
              fontFamily: '"Poppins", sans-serif',
            }}
            color="text.primary"
            component="h2"
          >
            Desafios
          </Typography>
          {goals &&
            goals.map((goal) => (
              <CardGoal key={goal.id}>
                {/* <img src={goal.image_url} alt="Imagem Objetivo" /> */}
                <img src="https://picsum.photos/75/100" alt="Imagem Objetivo" />

                <div className="textBox">
                  <h5>{goal.title}</h5>
                  <p>{goal.description}</p>
                </div>

                <div className="textDate">
                  <div className="dateInfo">
                    <p>Finalizar leitura até</p>
                    <p>xx/xx/xx</p>
                  </div>
                </div>
              </CardGoal>
            ))}
        </Goals>
        <Users></Users>
      </Container>
    </>
  );
};

export default Group;
