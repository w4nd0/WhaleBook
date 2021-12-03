import Carousel, { Controller } from "@jjunyjjuny/react-carousel";
import { Container } from "./styles";

const CarouselSample = ({ books, name }) => {
  return (
    <Container>
      {books && (
        <>
          <h2 style={{ textAlign: "center" }}>{name}</h2>
          <div
            style={{
              position: "relative",
              top: "133px",
              right: "60px",
              width: "50px",
            }}
          >
            <Controller prev carouselId={`jjunyjjuny${name}`} />
          </div>
          <Carousel itemCountPerPanel={5} customMode carouselId={`jjunyjjuny${name}`}>
            {books.map((book) => (
              <img
                src={
                  book?.volumeInfo?.imageLinks?.smallThumbnail
                    ? book?.volumeInfo?.imageLinks?.smallThumbnail
                    : "https://picsum.photos/130/190"
                }
                alt="Imagem livro"
                style={{ height: "180px" }}
              />
            ))}
          </Carousel>

          <div
            style={{
              position: "relative",
              bottom: "102px",
              left: "100%",
              width: "50px",
            }}
          >
            <Controller next carouselId={`jjunyjjuny${name}`} />
          </div>
        </>
      )}
    </Container>
  );
};

export default CarouselSample;
