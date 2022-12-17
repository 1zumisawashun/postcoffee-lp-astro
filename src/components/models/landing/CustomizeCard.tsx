import type { FC } from "react";
import styled from "styled-components";
import { BaseText } from "../../../functions/themes/BaseText";
import { DottedLineTwo } from "../../../functions/themes/DottedLine";

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
      <div className="content">
        <div className="info">
          <div className="title">{customize.headline}</div>
          <div className="message">{customize.title}</div>
        </div>
        <div className="picture">
          <img src={customize.image} alt="" />
        </div>
      </div>

      <CustomizeWrapper>
        <div className="menu">
          <div className="item">{customize.custom1}</div>
          <div className="plus">+</div>
          <div className="item">{customize.custom2}</div>
          <div className="plus">+</div>
          <div className="item">{customize.custom3}</div>
          <div className="plus">+</div>
          <div className="item">{customize.custom4}</div>
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
  width: 90%;
  height: 750px;
  margin: 0% auto 10%;
  background-color: white;
`;

const ContentWrapper = styled.div`
  width: 70%;
  height: auto;
  margin: 0 auto;
  padding: 5% 0 0;
`;
const CustomizeWrapper = styled.div`
  width: 50%;
  height: auto;
  margin: 5% auto;
  border: solid;
  padding: 2%;
`;
