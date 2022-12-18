import styled from "styled-components";
import { DottedLineThree, DottedLineOne } from "../../../functions/themes";
import type { Feedback } from "../../../functions/types/Feedback";

export type FeedbackCardProps = {
  feedback: Feedback;
};

export const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedback }) => {
  return (
    <FeedbackCardContainer>
      <GapWrapper>
        <StyledImage src={feedback.image} alt="" />
        <Block>
          <StyledIcon src={feedback.avatar} alt="lifehacker" />

          <Name>{feedback.name}</Name>
        </Block>
        <DottedLineThree>{feedback.text}</DottedLineThree>
      </GapWrapper>
    </FeedbackCardContainer>
  );
};

const FeedbackCardContainer = styled.div`
  border: 1px solid #f1f1f1;
  padding: 10%;
  border-radius: 1rem;
`;
const Block = styled.div`
  display: flex;
  align-items: center;
`;
const StyledIcon = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;
const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;
const Name = styled(DottedLineOne)`
  color: gray;
`;
const GapWrapper = styled.div`
  display: grid;
  gap: 10px;
`;
