import { Container } from "./styles";
import { useBooks } from "../../providers/books";
import CardOfBook from "../../components/Books";

const AllBooksPage = () => {
  const { allBooks, searchBooks } = useBooks();

  return (
    <Container>
      <h1>Todos livros</h1>
      <section>
        {searchBooks.length > 0
          ? searchBooks.map((book) => <CardOfBook book={book} />)
          : allBooks.map((book) => <CardOfBook book={book} />)}
      </section>
    </Container>
  );
};

export default AllBooksPage;
