import { Card, CardMedia, Typography, CardContent } from "@mui/material";

const GroupsCard = ({ group }) => {
  return (
    <>
      <Card>
        {group && (
          <CardMedia
            component="img"
            height="200"
            image={"https://picsum.photos/200/200"}
            alt="group"
          />
        )}
        <CardContent>
          <Typography variant="h5" color="text.secondary">
            {group.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {group.description.length > 38
              ? `${group.description.substring(0, 33)}...`
              : group.description}
          </Typography>
        </CardContent>

        <div className="btn">
          <input type="button" value="Sair" onClick={() => {}} />
        </div>
      </Card>
    </>
  );
};

export default GroupsCard;
