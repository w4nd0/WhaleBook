import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const GroupsCard = ({ group }) => {
  return (
    <>
      <Card style={{ margin: "10px", width: "190px" }}>
        {group && (
          <>
            <Link to={`/group/${group.group.id}`}>
              <CardMedia
                component="img"
                height="150"
                image={"https://picsum.photos/100/150"}
                alt="group"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  style={{ textAlign: "center" }}
                >
                  {group.group.name}
                </Typography>
              </CardContent>
            </Link>
            <Button
              style={{ display: "block", margin: "5px auto" }}
              type="submit"
              variant="contained"
              color="error"
              disableElevation
            >
              Sair
            </Button>
          </>
        )}
      </Card>
    </>
  );
};

export default GroupsCard;
