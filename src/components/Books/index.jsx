import { CardContainer } from "./styles";
import { useHistory } from "react-router-dom";
import { useBooks } from "../../providers/books";
import WhaleIcon from "../../assets/svg/whale_icon.svg";

const CardOfBook = ({ book }) => {
  const { book_url, image_url, title } = book;
  const { getBook, setActualBook } = useBooks();
  const history = useHistory();

  const bringBookAndRedirect = async (bookLink) => {
    setActualBook({});
    await getBook(bookLink);
    history.push("/book");
  };

  return (
    <CardContainer onClick={() => bringBookAndRedirect(book_url)}>
      <img src={image_url ? image_url : WhaleIcon} alt={title} />
      <p>{title}</p>
    </CardContainer>
  );
};

export default CardOfBook;
