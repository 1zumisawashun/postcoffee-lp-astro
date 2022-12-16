import type { FC } from "react";
import styled from "styled-components";
import { Button } from "../../uis/Button";
import { BaseText } from "../../../functions/themes/BaseText";
import { BaseTitle } from "../../../functions/themes/BaseTitle";
import { steps } from "../../../functions/constants/steps";

export type StepCardProps = {
  step: {
    image: string;
    headline?: string;
    title: string;
    text: string;
  };
};

export const StepCard: FC<StepCardProps> = ({ step }) => {
  return (
    <StepCardContainer>
      <IconWrapper>
        <StyledIcon src={step.image} alt="" />
      </IconWrapper>
      <ContentWrapper>
        <BaseText>{step.headline}</BaseText>
        <BaseText className="-bold">{step.title}</BaseText>
        <BaseText className="-small">{step.text}</BaseText>
      </ContentWrapper>
    </StepCardContainer>
  );
};

const StepCardContainer = styled.div`
  width: 250px;
  margin: 0 30px;
  height: 125px;
  display: flex;
`;
const StyledIcon = styled.img`
  width: 40px;
  line-height: 100px;
  margin: 0 auto;
`;
const IconWrapper = styled.div`
  width: 20%;
  height: auto;
  line-height: 125px;
`;
const ContentWrapper = styled.div`
  width: 80%;
  height: auto;
`;
