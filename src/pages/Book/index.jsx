import StarFill from "../../assets/svg/star_fill.svg";
import StarEmpty from "../../assets/svg/star_empty.svg";

import { Container } from "./styles";
import { RiBook3Fill } from "react-icons/ri";
const Book = () => {
  return (
    <>
      <Container>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/91OINeHnJGL.jpg"
          alt=""
          className="book"
        />
        <div>
          <h2>Harry Potter e a Pedra Filosofal (Harry Potter #1)</h2>
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
          <p>256 páginas</p>
        </div>
      </Container>
      <Container style={{ display: "inline-block" }}>
        <h2>Sinopse</h2>
        <p>
          Conheça Harry, filho de Tiago e Lílian Potter, feiticeiros que foram
          assassinados por um poderosíssimo bruxo, quando ele ainda era um bebê.
          Com isso, o menino acaba sendo levado para a casa dos tios que nada
          tinham a ver com o sobrenatural pelo contrário. Até os 10 anos, Harry
          foi uma espécie de gata borralheira: maltratado pelos tios, herdava
          roupas velhas do primo gorducho, tinha óculos remendados e era tratado
          como um estorvo. No dia de seu aniversário de 11 anos, entretanto, ele
          parece deslizar por um buraco sem fundo, como o de Alice no país das
          maravilhas, que o conduz a um mundo mágico. Descobre sua verdadeira
          história e seu destino: ser um aprendiz de feiticeiro até o dia em que
          terá que enfrentar a pior força do mal, o homem que assassinou seus
          pais, o terrível Lorde das Trevas. O menino de olhos verdes, magricela
          e desengonçado, tão habituado à rejeição, descobre, também, que é um
          herói no universo dos magos. Potter fica sabendo que é a única pessoa
          a ter sobrevivido a um ataque do tal bruxo do mal e essa é a causa da
          marca em forma de raio que ele carrega na testa. Ele não é um garoto
          qualquer, ele sequer é um feiticeiro qualquer; ele é Harry Potter,
          símbolo de poder, resistência e um líder natural entre os
          sobrenaturais.
        </p>
      </Container>
    </>
  );
};

export default Book;
