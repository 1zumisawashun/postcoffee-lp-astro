import styled from "styled-components";
import { CustomizeCard } from "./CustomizeCard";
import { customizes } from "../../../functions/constants/customizes";
import { BaseTitle } from "../../../functions/themes/BaseTitle";
import { BaseText } from "../../../functions/themes/BaseText";

export const Customize = () => {
  return (
    <CustomizeContainer>
      <div className="price-description-block">
        <div className="info">
          <Headline>様々なコーヒーライフスタイルに</Headline>
          <BaseTitle className="-sub">例えばこんなカスタマイズ</BaseTitle>
        </div>
      </div>
      <CustomizeCardContainer>
        {customizes.map((customize) => (
          <CustomizeCard customize={customize} />
        ))}
      </CustomizeCardContainer>
      <div className="price-description-block">
        <div className="info">
          <Headline>すぐに始められるコーヒーライフ</Headline>
          <BaseTitle className="-sub">
            あなたのカスタマイズで始めよう！
          </BaseTitle>
        </div>
      </div>

      {/* <div className="campaign-container">
      <div className="price">月々¥1,480~（税込¥1,598~）</div>
      <div className="title">4つの特典</div>
      <div className="campaign">
        <div className="item" v-for="cp in cps" :key="cp.id">
          <div className="name">{{ cp.title }}</div>
          <div className="message">{{ cp.message }}</div>
        </div>
      </div>
      <div className="diagnosis-button-wrapper">
        <div className="diagnosis-button">
          <a>無料でコーヒー診断をする</a>
        </div>
      </div> */}
      {/* </div> */}
    </CustomizeContainer>
  );
};

const CustomizeContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #f1f1f1;
  padding: 0 0 3% 0;
`;
const CustomizeCardContainer = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  display: flex;
  background-color: #f1f1f1;
`;

const Headline = styled(BaseText)`
  width: fit-content;
  border-bottom: 1px solid black;
`;
