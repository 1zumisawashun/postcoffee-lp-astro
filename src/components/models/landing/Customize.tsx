import styled from "styled-components";
import { CustomizeCard } from "./CustomizeCard";
import { customizes } from "../../../functions/constants/customizes";
import { ComboTitle } from "../../uis";
import { CustomizeCampaign } from "./CustomizeCampaign";

export const Customize = () => {
  return (
    <CustomizeContainer>
      <ComboTitle
        headline="様々なコーヒーライフスタイルに"
        title="例えばこんなカスタマイズ"
      />

      <CustomizeCardContainer>
        {customizes.map((customize) => (
          <CustomizeCard customize={customize} />
        ))}
      </CustomizeCardContainer>

      <ComboTitle
        headline="すぐに始められるコーヒーライフ"
        title="あなたのカスタマイズで始めよう！"
      />

      <CustomizeCampaign></CustomizeCampaign>
    </CustomizeContainer>
  );
};

const CustomizeContainer = styled.div`
  background-color: #f1f1f1;
  display: grid;
  gap: 30px;
  padding: 30px;
`;

const CustomizeCardContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: #f1f1f1;
`;
