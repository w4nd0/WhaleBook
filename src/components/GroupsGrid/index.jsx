import {} from "./styles";
import { useEffect, useState } from "react";
import GroupsCard from "../GroupsCard";
import api from "../../services/api";
import { Grid } from "@mui/material";

const GroupsGrid = () => {
  const [groups, setGroups] = useState([]);

  
  // Authorization: `Bearer ${token}`,
  const getGroups = () => {
    api
      .get("/groups/my_groups/", {
        headers: {
          Authorization: `Bearer`,
        },
      })
      .then((response) => setGroups(response.data));
  };

  useEffect(() => {
    // getGroups();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        {groups &&
          groups.map((groups) => (
            <Grid key={groups.id}>
              <GroupsCard group={groups} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default GroupsGrid;
