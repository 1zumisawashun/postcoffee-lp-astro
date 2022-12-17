import styled from "styled-components";

export const BaseTitle = styled.p`
  font-size: 40px;
  font-weight: bold;
  white-space: pre-wrap;
  &.-sub {
    font-size: 25px;
  }
  &.-normal {
    font-weight: normal;
  }
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
