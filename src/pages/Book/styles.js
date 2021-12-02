import styled from "styled-components";

export const Container = styled.section`
  margin-left: 450px;
  display: flex;
  margin-top: 60px;

  .starContainer {
    margin-top: 12px;
  }

  .book {
    max-width: 150px;
    margin-right: 10px;
  }

  img {
    min-height: 23px;
    margin-right: 2px;
  }

  h2 {
    font-size: 30px;
  }
  p {
    max-width: 90%;
    text-align: justify;
  }

  .background {
    background-color: var(--background-black);
    width: 120px;
    display: flex;

    align-items: center;
    border-radius: 4px;
    svg {
      fill: var(--white);
      margin-right: 6px;
      margin-left: 10px;
    }

    p {
      color: var(--white);
      font-size: 17px;
    }
  }
`;
