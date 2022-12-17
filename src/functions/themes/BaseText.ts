import styled from "styled-components";

export const BaseText = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
  &.-bold {
    font-weight: bold;
  }
  &.-white {
    color: white;
  }
  &.-small {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
