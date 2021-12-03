import styled from "styled-components";

export const Container = styled.div``;

export const Head = styled.div`
  display: flex;
  margin-left: 100px;
  margin-top: 50px;

  img {
    margin-right: 25px;
  }
`;

export const Goals = styled.div`
  width: 80%;
  margin-left: 100px;
`;

export const CardGoal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  .textBox {
    flex: 1;
    margin: 5px;
  }

  .dateInfo {
    position: relative;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    text-align: center;
    background-color: #282828;
    padding: 10px;
    border-radius: 4px;
    
    p {
      color: var(--white);
    }
  }
`;

export const Users = styled.div``;
