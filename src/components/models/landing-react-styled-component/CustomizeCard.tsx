import styled from "styled-components";
import { ComboTitle } from "../../uis";
import { BaseText } from "../../../functions/themes";
import type { Customize } from "../../../functions/types/Customize";

export type CustomizeCardProps = {
  customize: Customize;
};

export const CustomizeCard: React.FC<CustomizeCardProps> = ({ customize }) => {
  return (
    <CustomizeCardContainer>
      <ComboTitle headline={customize.headline} title={customize.title} />

      <ImageWrapper>
        <StyledImage
          src={customize.image}
          alt={customize.image}
          loading="lazy"
          width={320}
          height={240}
        />
      </ImageWrapper>

      <CustomizeWrapper>
        <div>
          <BaseText className="-small">{customize.custom1}</BaseText>
          <BaseText className="-small">+</BaseText>
          <BaseText className="-small">{customize.custom2}</BaseText>
          <BaseText className="-small">+</BaseText>
          <BaseText className="-small">{customize.custom3}</BaseText>
          <BaseText className="-small">+</BaseText>
          <BaseText className="-small">{customize.custom4}</BaseText>
        </div>

        <ExcludingTax>{customize.priceExcludingTax}</ExcludingTax>
        <BaseText>{customize.priceIncludingTax}</BaseText>
      </CustomizeWrapper>
    </CustomizeCardContainer>
  );
};

const CustomizeCardContainer = styled.div`
  width: 30%;
  padding: 30px;
  display: grid;
  gap: 30px;
  background-color: white;
`;
const CustomizeWrapper = styled.div`
  text-align: center;
  border: 1px solid black;
  padding: 30px;
  display: grid;
  gap: 30px;
`;
const ImageWrapper = styled.div`
  width: 100%;
`;

const ExcludingTax = styled.p`
  font-weight: bold;
  font-size: 30px;
`;
const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;
