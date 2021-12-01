import styled from "styled-components";

export const CustomHeader = styled.header`
  display: flex;
  background-color: var(--primary);
  justify-content: space-evenly;
  min-width: 1500px;
  padding: 10px;

  input {
    border: 2px solid var(--border);
    margin-right: 25px;
  }

  h1 {
    color: var(--white);
    font-size: 20px;
    font-weight: 600;
  }

  img {
    /* height: 40px; */
  }

  .wrap {
    display: flex;
    align-items: center;
    margin-left: 60px;
  }
`;
