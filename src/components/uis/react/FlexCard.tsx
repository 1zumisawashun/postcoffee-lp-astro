import styled, { css } from "styled-components";
import { BaseText } from "../../../functions/themes";
import { ComboTitle } from "..";
import type { FlexCardItem } from "../../../functions/types/Common";

export type FlexCardProps = {
  card: FlexCardItem;
};

export const FlexCard: React.FC<FlexCardProps> = ({ card }) => {
  return (
    <FlexCardContainer reverse={card.isReverse}>
      <StyledImage src={card.image} alt={card.image} loading="lazy" />

      <ContentWrapper>
        <ComboTitle headline={card.headline} title={card.title} shouldLeft />
        <BaseText>{card.text}</BaseText>
        <BaseText>{card.addition}</BaseText>
      </ContentWrapper>
    </FlexCardContainer>
  );
};

const FlexCardContainer = styled.div<{ reverse: boolean }>`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  ${(props) =>
    props.reverse &&
    css`
      flex-direction: row-reverse;
    `};
`;
const StyledImage = styled.img`
  width: 35%;
`;
const ContentWrapper = styled.div`
  width: 55%;
  display: grid;
  margin: auto 0;
  gap: 30px;
`;
