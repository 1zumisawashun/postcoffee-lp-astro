import styled from "styled-components";
import { BaseText } from "./BaseText";

export const DottedLineOne = styled(BaseText)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
export const DottedLineTwo = styled(BaseText)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
export const DottedLineThree = styled(BaseText)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
