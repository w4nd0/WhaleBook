import { useEffect, useState } from "react";
import GroupsCard from "../GroupsCard";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAccount } from "../../providers/accounts";
import { useGroups } from "../../providers/groups";

import {
  Grid,
  Typography,
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  TextField,
} from "@mui/material";
import { CardNewGroup } from "./styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const GroupsGrid = () => {
  const [open, setOpen] = useState(false);
  const [groups, setGroups] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { token } = useAccount();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Authorization: `Bearer ${token}`,
  const getGroups = () => {
    api
      .get("api/groups/my_groups/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setGroups(response.data));
  };
  useEffect(() => {
    getGroups();
    //eslint-disable-next-line
  }, [token, groups]);

  const createGroup = (data) => {
    api
      .post("api/groups/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getGroups());
  };

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
            <Grid>
              <GroupsCard group={groups} key={groups.id} />
            </Grid>
          ))}
        <CardNewGroup onClick={handleOpen}>
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
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                style={{ marginBottom: "20px" }}
              >
                Criar um Grupo
              </Typography>
              <form onSubmit={handleSubmit(createGroup)}>
                <TextField
                  sx={{ marginBottom: 2 }}
                  fullWidth
                  helperText={errors.name?.message}
                  {...register("name")}
                  label="Nome do grupo"
                  name="name"
                />

                <TextField
                  fullWidth
                  sx={{ marginBottom: 2 }}
                  helperText={errors.description?.message}
                  {...register("description")}
                  name="description"
                  label="Descrição"
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disableElevation
                  onClick={() => handleClose()}
                >
                  Cadastrar
                </Button>
              </form>
            </Box>
          </Fade>
        </Modal>
      </Grid>
    </>
  );
};

export default GroupsGrid;
