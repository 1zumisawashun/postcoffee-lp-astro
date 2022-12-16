import styled, { css } from "styled-components";

export const Button = styled.button<{ outlined?: boolean }>`
  display: inline-block;
  padding: 0.5rem 0;
  width: 11rem;
  background: transparent;
  color: white;
  background: black;
  border-radius: 30px;
  border: 1px solid black;
  ${(props) =>
    props.outlined &&
    css`
      background: white;
      color: black;
    `}
  :hover {
    opacity: 0.8;
  }
  &.-large {
    width: 15rem;
    padding: 1rem 0.5rem;
  }
  &.-fullwidth {
    width: 100%;
    padding: 1rem 0.5rem;
  }
`;
