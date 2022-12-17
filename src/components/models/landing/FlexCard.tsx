import type { FC } from "react";
import styled, { css } from "styled-components";
import { BaseText } from "../../../functions/themes/BaseText";
import { ComboTitle } from "../../uis";

export type FlexCardProps = {
  card: {
    image: string;
    headline: string;
    title: string;
    text: string;
    addition: string;
    isReverse: boolean;
  };
};

export const FlexCard: FC<FlexCardProps> = ({ card }) => {
  return (
    <FlexCardContainer reverse={card.isReverse}>
      <StyledImage src={card.image} alt="" />

      <ContentWrapper>
        <ComboTitle headline={card.headline} title={card.title} shouldLeft />
        <BaseText>{card.text}</BaseText>
        <BaseText>{card.addition}</BaseText>
      </ContentWrapper>
    </FlexCardContainer>
  );
};

const FlexCardContainer = styled.div<{ reverse: boolean }>`
  width: 90%;
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
  width: 40%;
`;
const ContentWrapper = styled.div`
  width: 55%;
  display: grid;
  margin: auto 0;
  gap: 30px;
`;
