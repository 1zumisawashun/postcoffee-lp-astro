import styled from "styled-components";
import {
  DottedLineThree,
  DottedLineOne,
} from "../../../functions/themes/DottedLine";

export type FeedbackCardProps = {
  feedback: {
    image: string;
    avatar: string;
    name: string;
    text: string;
  };
};

export const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedback }) => {
  return (
    <FeedbackCardContainer>
      <GapWrapper>
        <StyledImage src={feedback.image} alt="" />
        <Block>
          <StyledIcon
            src={feedback.avatar}
            alt="lifehacker"
            className="image"
          />

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
