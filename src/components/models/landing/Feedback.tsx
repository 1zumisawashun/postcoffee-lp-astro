import { useState } from "react";
import styled, { css } from "styled-components";

export const Template = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React styled-component counter</h1>
      <div>{count}</div>
      <div>
        <Button onClick={() => setCount(count + 1)} primary>
          increment
        </Button>
        <Button onClick={() => setCount(count - 1)}>decrement</Button>
      </div>
    </>
  );
};

const Button = styled.button<{ primary?: boolean }>`
  display: inline-block;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  background: black;
  border-radius: 30px;
  border: 1px solid black;
  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: black;
    `}
  :hover {
    opacity: 0.8;
  }
`;
