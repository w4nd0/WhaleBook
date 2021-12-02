import Button from "../../components/Button";
import { useHistory } from "react-router";

const Dashboard = () => {
  const history = useHistory();
  return (
    <>
      <div>Dashboard</div>
      <Button
        style={{ marginLeft: 400 }}
        onClickFunc={() => history.push(`/book`)}
      >
        book
      </Button>
    </>
  );
};

export default Dashboard;
