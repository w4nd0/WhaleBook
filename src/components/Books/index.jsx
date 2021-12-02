import { CardContainer } from "./styles";
import { useHistory } from "react-router-dom";
import { useBooks } from "../../providers/books";
import Rating from '@mui/material/Rating';
import WhaleIcon from "../../assets/svg/whale_icon.svg";

const CardOfBook = ({ book }) => {
  const {selfLink, volumeInfo, averageRating} = book;
  const { getBook } = useBooks();
  const history = useHistory();

  const bringBookAndRedirect = async (bookLink) => {
    await getBook(bookLink)
    history.push("/book")
  };

  return (
    <CardContainer>
      <abbr title={volumeInfo.title} onClick={() => bringBookAndRedirect({ selfLink })}><img src={volumeInfo.imageLinks.thumbnail || WhaleIcon} alt={volumeInfo.title} /></abbr>
      <Rating name="rating-book" value={averageRating} readOnly size="small"/>
    </CardContainer>
  )

};

export default CardOfBook;
