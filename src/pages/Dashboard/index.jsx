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
        </Container>
      )}
    </>
  );
};

export default Dashboard;
