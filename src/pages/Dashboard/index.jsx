import CarouselSample from "../../components/CarouselSample";
import { useBooks } from "../../providers/books";
import { Container } from "./styles";

const Dashboard = () => {
  const { allBooks, fantasyBooks, adventureBooks, selfHelpBooks } = useBooks();

  return (
    <>
      <div>Dashboard</div>
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
