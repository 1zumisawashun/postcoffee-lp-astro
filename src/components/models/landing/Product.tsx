import styled from "styled-components";
import PostcoffeeBox from "../../../assets/images/image_postcoffee_box.png";
import Check from "../../../assets/images/image_check.png";
import { Button } from "../../uis/Button";

export const Product = () => {
  return (
    <ProductContainer>
      <StyledImage src={PostcoffeeBox} alt="postcoffee-box" />

      <ProductContent>
        <Headline>あなた専用のコーヒーボックス</Headline>

        <Title>
          すぐにコーヒーライフを始めるためのオールインワンボックス
          <br />
          診断から好みにあったコーヒーが3種類
        </Title>
        <Subtitle>
          好みに合わせて、豆の挽き方や頻度、分量、シュガー、ミルク（クリープ）などカスタマイズ！
        </Subtitle>
        <Panel>
          <PanelItem>
            <StyledIcon src={Check} alt="" />
            マグとお湯を用意するだけでOK！
          </PanelItem>
          <PanelItem>
            <StyledIcon src={Check} alt="" />
            縛りなしでスキップも簡単！
          </PanelItem>
          <PanelItem>
            <StyledIcon src={Check} alt="" />
            ずっと、全国送料無料！
          </PanelItem>
        </Panel>
        <PriceWrapper>
          <Ship>送料無料</Ship>
          <ExcludingTax>¥1,480~</ExcludingTax>
          <IncludingTax>（税込¥1,598~）</IncludingTax>
        </PriceWrapper>
        <Button className="-fullwidth">
          1分であなた好みのコーヒー診断 <br />
          無料でコーヒーを診断
        </Button>
      </ProductContent>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 30px;
  border: 2px solid black;
  display: flex;
  justify-content: space-between;
  padding: 5%;
`;
const StyledImage = styled.img`
  width: 55%;
  height: auto;
`;
const ProductContent = styled.div`
  width: 40%;
  display: grid;
  gap: 20px;
`;
const Headline = styled.p`
  width: fit-content;
  font-size: 14px;
  border-bottom: 1px solid black;
`;
const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
`;
const Subtitle = styled.p`
  font-size: 16px;
  font-weight: bold;
`;
const Panel = styled.div`
  background-color: #f1f1f1;
  padding: 20px;
  display: grid;
  gap: 10px;
`;
const StyledIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;
const PanelItem = styled.div`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;
const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Ship = styled.p`
  font-size: 16px;
  border: 1px solid black;
  text-align: center;
  padding: 5px;
`;
const ExcludingTax = styled.p`
  font-weight: bold;
  font-size: 40px;
`;
const IncludingTax = styled.p`
  font-size: 16px;
`;
