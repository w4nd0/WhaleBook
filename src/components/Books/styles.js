import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 200px;
  justify-content: space-around;
  cursor: pointer;

  image {
    width: 100%;
  }
  p {
    align-self: baseline;
  }
`;
