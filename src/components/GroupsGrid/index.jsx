import { useEffect, useState } from "react";
import GroupsCard from "../GroupsCard";
import api from "../../services/api";
import { Grid, Typography } from "@mui/material";
import { CardNewGroup } from "./styles";

const GroupsGrid = () => {
  const [groups, setGroups] = useState([]);

  // Authorization: `Bearer ${token}`,
  const getGroups = () => {
    api
      .get("/groups/my_groups/", {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM4Mzk4NTA1LCJpYXQiOjE2MzgzOTQ5MDUsImp0aSI6IjkyYzEwNWZiNzQ3MjQ4MTA4ZmQ5NDc0NDM3OWY3NGIzIiwidXNlcl9pZCI6MTAsInVzZXIiOiJ0dWxpcGEifQ.mUn8x18m-OuPvAxuNgBdUaCle77orCffXBvz0O-wzEE`,
        },
      })
      .then((response) => setGroups(response.data));
  };

  useEffect(() => {
    getGroups();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Typography
        variant="h4"
        style={{
          margin: "50px 0 50px 700px",
          fontFamily: '"Poppins", sans-serif',
        }}
        color="text.primary"
        component="h1"
      >
        Meus Grupos
      </Typography>
      <Grid
        style={{
          paddingLeft: "310px",
          paddingTop: "10px",
          marginTop: "0px",
        }}
        container
        spacing={3}
      >
        {groups &&
          groups.map((groups) => (
            <Grid key={groups.id}>
              <GroupsCard group={groups} />
            </Grid>
          ))}
        <CardNewGroup>
          <img
            src="https://static.vecteezy.com/ti/vetor-gratis/p1/583100-icone-botao-mais-gr%C3%A1tis-vetor.jpg"
            alt="Add Group"
          />
          <Typography
            color="text.secondary"
            style={{
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            Novo Grupo
          </Typography>
        </CardNewGroup>
      </Grid>
    </>
  );
};

export default GroupsGrid;
