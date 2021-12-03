import styled from "styled-components";

export const Container = styled.div`
  margin-left: 270px;
  display: flex;
  flex-direction: column;

  h1 {
    padding: 30px 0;
    font-size: 70px;
    font-weight: 600;
    text-align: center;
  }

  section {
    overflow: scroll;
    margin: 0 20px;
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
