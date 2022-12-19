import styled from "styled-components";
import { CustomizeCard } from "./CustomizeCard";
import { customizes } from "../../../functions/constants/customizes";
import { ComboTitle } from "../../uis";
import { CustomizeCampaign } from "./CustomizeCampaign";
import { BaseContainer } from "../../../functions/themes";

export const Customize = () => {
  return (
    <BaseContainer>
      <GapWrapper>
        <ComboTitle
          headline="様々なコーヒーライフスタイルに"
          title="例えばこんなカスタマイズ"
        />

        <CustomizeCardContainer>
          {customizes.map((customize, index) => (
            <CustomizeCard customize={customize} key={index} />
          ))}
        </CustomizeCardContainer>

        <ComboTitle
          headline="すぐに始められるコーヒーライフ"
          title="あなたのカスタマイズで始めよう！"
        />

        <CustomizeCampaign></CustomizeCampaign>
      </GapWrapper>
    </BaseContainer>
  );
};

const GapWrapper = styled.div`
  display: grid;
  gap: 30px;
`;
const CustomizeCardContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
