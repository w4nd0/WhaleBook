import { Container } from "./styles";
import { useBooks } from "../../providers/books";
import CardOfBook from "../../components/Books";

const AllBooksPage = () => {
  const { userBooks, allBooks, searchBooks } = useBooks();

  return (
    <Container>
      <h1>Todos livros</h1>
      <section>
        {searchBooks.length > 0
          ? searchBooks.map((book) => <CardOfBook key={book.id} book={book} />)
          : userBooks.map((book) => <CardOfBook key={book.id} book={book} />)}
      </section>
    </Container>
  );
};

export default AllBooksPage;
