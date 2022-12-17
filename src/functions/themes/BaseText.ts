import styled from "styled-components";

export const BaseText = styled.p`
  font-size: 16px;
  &.-bold {
    font-weight: bold;
  }
  &.-white {
    color: white;
  }
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
