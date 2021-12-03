import StarFill from "../../assets/svg/star_fill.svg";
import StarEmpty from "../../assets/svg/star_empty.svg";

import { Container } from "./styles";
import { RiBook3Fill } from "react-icons/ri";
import { useBooks } from "../../providers/books";
import WhaleIcon from "../../assets/svg/whale_icon.svg";

const Book = () => {
  const { actualBook } = useBooks();
  const { volumeInfo } = actualBook;
  return (
    <>
      <Container>
        {volumeInfo ? (
          <>
            <img
              src={
                volumeInfo.imageLinks
                  ? volumeInfo.imageLinks.thumbnail
                  : WhaleIcon
              }
              alt={volumeInfo.title}
              className="book"
            />
            <div>
              <h2>{volumeInfo.title}</h2>
              <div className="starContainer">
                <img src={StarFill} alt="star fill" />
                <img src={StarFill} alt="star fill" />
                <img src={StarFill} alt="star fill" />
                <img src={StarEmpty} alt="star fill" />
                <img src={StarEmpty} alt="star fill" />
              </div>
              <div className="background">
                <RiBook3Fill />
                <p>Lido</p>
              </div>
              <p>{volumeInfo.pageCount || 0} páginas</p>
            </div>
          </>
        ) : (
          <h2>Carregando...</h2>
        )}
      </Container>
      <Container style={{ display: "inline-block" }}>
        {volumeInfo ? (
          <>
            <h2>Sinopse</h2>
            <p> {volumeInfo.description}</p>
          </>
        ) : (
          <p>
            Caso não carregue, <a href="/allbooks">Clique aqui!</a>
          </p>
        )}
      </Container>
    </>
  );
};

export default Book;
