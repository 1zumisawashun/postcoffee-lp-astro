import styled from "styled-components";
import { BaseText, DottedLineTwo } from "../../../functions/themes";
import type { Partner } from "../../../functions/types/Partner";

export type PartnerCardProps = {
  partner: Partner;
};

export const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  return (
    <PartnerCardContainer>
      <PartnerCardWrapper>
        <img
          src={partner.image}
          alt={partner.image}
          loading="lazy"
          width={160}
          height={120}
        />
        <ContentWrapper>
          <BaseText>{partner.name}</BaseText>
          <DottedLineTwo>（{partner.prefecture}）</DottedLineTwo>
        </ContentWrapper>
      </PartnerCardWrapper>
    </PartnerCardContainer>
  );
};

const PartnerCardContainer = styled.div`
  width: 20%;
  background-color: white;
  border: 1px solid black;
`;
const ContentWrapper = styled.div`
  height: 80px;
`;

const PartnerCardWrapper = styled.div`
  padding: 20px;
  display: grid;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
