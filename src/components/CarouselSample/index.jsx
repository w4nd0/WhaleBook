import Carousel, { Controller } from "@jjunyjjuny/react-carousel";
import { Container, Item } from "./styles";

const CarouselSample = ({ books }) => {
  return (
    <Container>
      {books && (
        <>
          <h2 style={{ textAlign: "center" }}>Sample Carousel</h2>
          <Carousel itemCountPerPanel={5} customMode carouselId={"jjunyjjuny"}>
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
              bottom: "90px",
              right: "30px",
              width: "50px",
            }}
          >
            <Controller prev carouselId={"jjunyjjuny"} />
          </div>
          <div
            style={{
              position: "relative",
              bottom: "138px",
              left: "100%",
              width: "50px",
            }}
          >
            <Controller next carouselId={"jjunyjjuny"} />
          </div>
        </>
      )}
    </Container>
  );
};

export default CarouselSample;
