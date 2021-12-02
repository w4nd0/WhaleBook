import styled from "styled-components";

export const Container = styled.section`
  margin-left: 200px;

  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  margin-top: 100px;

  h1 {
    font-size: 70px;
    font-weight: 600;
  }

  h2 {
    font-size: 35px;
    max-width: 550px;
  }

  .imgContainer {
    div {
      height: 60vh !important;
      width: 40vw !important;
      margin: 0 auto;
    }
  }
`;
