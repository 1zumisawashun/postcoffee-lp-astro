import styled from "styled-components";
import { BaseText, DottedLineTwo } from "../../../functions/themes";
import type { Partner } from "../../../functions/types/Partner";

export type PartnerCardProps = {
  partner: Partner;
};

export const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  return (
    <PartnerCardContainer>
      <div>
        <img src={partner.image} alt={partner.image} loading="lazy" />
        <ContentWrapper>
          <BaseText>{partner.name}</BaseText>
          <DottedLineTwo>（{partner.prefecture}）</DottedLineTwo>
        </ContentWrapper>
      </div>
    </PartnerCardContainer>
  );
};

const PartnerCardContainer = styled.div`
  width: 20%;
  height: 250px;
  background-color: white;
  border: 1px solid black;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  height: 80px;
`;
