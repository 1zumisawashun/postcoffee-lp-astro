import styled from "styled-components";
import { Button } from "../../uis";
import { BaseText, BaseTitle } from "../../../functions/themes";

const campaigns = [
  "ずっと全国送料無料",
  "折りたたみドリッパープレゼント",
  "スタートブックプレゼント",
  "オリジナルステッカープレゼント",
];

export const CustomizeCampaign = () => {
  return (
    <CustomizeCampaignContainer>
      <BaseTitle>月々¥1,480~（税込¥1,598~）</BaseTitle>
      <CustomText>4つの特典</CustomText>
      <Block>
        {campaigns.map((campaign, index) => (
          <Wrapper key={index}>
            <Panel>
              <BaseText className="-bold">{`特典${index + 1}`}</BaseText>
            </Panel>
            <BaseText>{campaign}</BaseText>
          </Wrapper>
        ))}
      </Block>
      <Button className="-fullwidth">無料でコーヒー診断をする</Button>
    </CustomizeCampaignContainer>
  );
};

const CustomizeCampaignContainer = styled.div`
  width: 60%;
  margin: auto;
  display: grid;
  gap: 30px;
  text-align: center;
`;

const Block = styled.div`
  display: flex;
  background-color: white;
`;
const Wrapper = styled.div`
  width: 20%;
  margin: 20px auto;
  background-color: white;
`;
const Panel = styled.div`
  background-color: #f1f1f1;
  padding: 10px 0;
  margin-bottom: 10px;
`;

const CustomText = styled(BaseText)`
  padding: 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
