import CarouselSample from "../../components/CarouselSample";
import { useBooks } from "../../providers/books";
import Button from "../../components/Button";
import { useHistory } from "react-router";
import { Container } from "./styles";

const Dashboard = () => {
  const { allBooks, fantasyBooks, adventureBooks, selfHelpBooks } = useBooks();

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
      {allBooks && (
        <Container>
          <CarouselSample books={allBooks} name="Diversos" />
          <CarouselSample books={fantasyBooks} name="Fantasia" />
          <CarouselSample books={adventureBooks} name="Aventura" />
          <CarouselSample books={selfHelpBooks} name="Autoajuda" />
        </Container>
      )}
    </>
  );
};

export default Dashboard;
