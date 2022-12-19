import styled from "styled-components";
import { BaseText } from "../../../functions/themes";
import type { StepCardItem } from "../../../functions/types/Common";

export type StepCardProps = {
  step: StepCardItem;
};

export const StepCard: React.FC<StepCardProps> = ({ step }) => {
  return (
    <StepCardContainer>
      <FlexWrapper>
        <IconWrapper>
          <StyledIcon src={step.image} alt={step.image} loading="lazy" />
        </IconWrapper>
        <ContentWrapper>
          <BaseText className="-small">{step.headline}</BaseText>
          <BaseText className="-bold">{step.title}</BaseText>
        </ContentWrapper>
      </FlexWrapper>
      <ContentWrapper className="-right">
        <BaseText className="-small">{step.text}</BaseText>
      </ContentWrapper>
    </StepCardContainer>
  );
};

const StepCardContainer = styled.div`
  width: 23%;
`;
const FlexWrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
`;
const StyledIcon = styled.img`
  width: 30px;
  height: 30px;
`;
const IconWrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContentWrapper = styled.div`
  width: 80%;
  &.-right {
    margin-left: auto;
  }
`;
