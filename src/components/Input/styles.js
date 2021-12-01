import styled, { css, keyframes } from "styled-components";

export const InputItem = styled.input`
  border-radius: 4px;
  border: 2px solid var(--border);
  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--border);
    `}
  color: var(--black);
  font-size: 16px;
  width: 300px;
  padding: 0px 15px;
  height: 33px;
  animation-name: ${(props) => props.errored && "error"};
  animation-duration: 0.075s;
  animation-iteration-count: 5;
  animation-direction: alternate;
  animation-fill-mode: backwards;

  @keyframes error {
    from {
      transform: translateX(-10px);
    }
    to {
      transform: translateX(10px);
    }
  }
`;

const opacityAppear = keyframes`
from{
    opacity: 0;
}

to{
    opacity: 1;
}`;

export const ErrorSpan = styled.span`
  position: absolute;
  top: 41px;
  font-size: 14px;
  color: var(--colorFocus-hover);
  animation: ${opacityAppear} 0.5s;
`;
