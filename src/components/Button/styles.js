import styled from "styled-components";

export const ButtonType = styled.button`
  border-radius: 4px;
  height: 35px;
  background-color: ${(props) =>
    props.whiteSchema ? "var(--selected-button)" : "var(--button)"};
  color: ${(props) => (props.whiteSchema ? "var(--white)" : "var(--black)")};
  font-size: 14px;
  font-weight: 600;
  transition: 300ms;
  letter-spacing: 0.5px;
  padding: 0px 20px;
  border: 2px solid
    ${(props) => (props.whiteSchema ? "var(--border)" : "transparent")};
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  :hover {
    background-color: ${(props) =>
      props.whiteSchema ? "var(--button)" : "var(--selected-button)"};
    color: ${(props) => (props.whiteSchema ? "var(--black)" : "var(--white)")};
  }
`;
