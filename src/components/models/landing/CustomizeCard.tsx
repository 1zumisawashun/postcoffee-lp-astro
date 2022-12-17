import type { FC } from "react";
import styled from "styled-components";
import { ComboTitle } from "../../uis";
import { BaseText } from "../../../functions/themes/BaseText";

export type CustomizeCardProps = {
  customize: {
    headline: string;
    title: string;
    image: string;
    custom1: string;
    custom2: string;
    custom3: string;
    custom4: string;
    priceExcludingTax: string;
    priceIncludingTax: string;
  };
};

export const CustomizeCard: FC<CustomizeCardProps> = ({ customize }) => {
  return (
    <CustomizeCardContainer>
      <ComboTitle headline={customize.headline} title={customize.title} />

      <div className="picture">
        <img src={customize.image} alt="" />
      </div>

      <CustomizeWrapper>
        <div className="menu">
          <BaseText className="-small">{customize.custom1}</BaseText>
          <BaseText className="-small">+</BaseText>
          <BaseText className="-small">{customize.custom2}</BaseText>
          <BaseText className="-small">+</BaseText>
          <BaseText className="-small">{customize.custom3}</BaseText>
          <BaseText className="-small">+</BaseText>
          <BaseText className="-small">{customize.custom4}</BaseText>
        </div>

        <div className="price">
          <div className="excludingtax">{customize.priceExcludingTax}</div>
          <div className="includingtax">{customize.priceIncludingTax}</div>
        </div>
      </CustomizeWrapper>
    </CustomizeCardContainer>
  );
};

const CustomizeCardContainer = styled.div`
  width: 30%;
  height: 750px;
  padding: 30px;
  display: grid;
  gap: 30px;
  background-color: white;
`;

const ContentWrapper = styled.div`
  width: 70%;
  height: auto;
  margin: 0 auto;
  padding: 5% 0 0;
`;
const CustomizeWrapper = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
  border: 1px solid black;
  padding: 10px;
`;
