import styled from "styled-components";
import { BaseText } from "../../../functions/themes";
import type { StepCardItem } from "../../../functions/types/Common";

export type StepCardProps = {
  step: StepCardItem;
};

export const StepCard: React.FC<StepCardProps> = ({ step }) => {
  return (
    <StepCardContainer>
      <GapWrapper>
        <StyledIcon src={step.image} alt={step.image} loading="lazy" />

        <div>
          <BaseText className="-small">{step.headline}</BaseText>
          <BaseText className="-bold">{step.title}</BaseText>
        </div>

        <BaseText className="-small">{step.text}</BaseText>
      </GapWrapper>
    </StepCardContainer>
  );
};

const StepCardContainer = styled.div`
  width: 20%;
`;
const StyledIcon = styled.img`
  width: 40px;
  height: 40px;
`;
const GapWrapper = styled.div`
  display: grid;
  gap: 5px;
`;
