import styled from "styled-components";
import PostcoffeeBox from "../../../assets/images/image_postcoffee_box.png";
import Check from "../../../assets/images/image_check.png";
import { Button, ComboTitle } from "../../uis";
import { BaseText, BaseContainer } from "../../../functions/themes";

const PanelItems = [
  "マグとお湯を用意するだけでOK！",
  "縛りなしでスキップも簡単！",
  "ずっと、全国送料無料！",
];

export const Product = () => {
  return (
    <BaseContainer className="-white">
      <ProductContainer>
        <ImageWrapper>
          <img
            src={PostcoffeeBox}
            alt="postcoffee-box"
            loading="lazy"
            width={640}
            height={480}
          />
        </ImageWrapper>

        <ProductContent>
          <ComboTitle
            headline="あなた専用のコーヒーボックス"
            title={`すぐにコーヒーライフを始めるためのオールインワンボックス\n診断から好みにあったコーヒーが3種類`}
            shouldLeft
          />

          <BaseText className="-bold">
            好みに合わせて、豆の挽き方や頻度、分量、シュガー、ミルク（クリープ）などカスタマイズ！
          </BaseText>

          <PanelWrapper>
            {PanelItems.map((item, index) => (
              <PanelItem key={index}>
                <IconWrapper>
                  <img src={Check} alt={Check} loading="lazy" />
                </IconWrapper>
                {item}
              </PanelItem>
            ))}
          </PanelWrapper>

          <PriceWrapper>
            <Ship>送料無料</Ship>
            <ExcludingTax>¥1,480~</ExcludingTax>
            <BaseText>（税込¥1,598~）</BaseText>
          </PriceWrapper>

          <Button className="-fullwidth">
            1分であなた好みのコーヒー診断 <br />
            無料でコーヒーを診断
          </Button>
        </ProductContent>
      </ProductContainer>
    </BaseContainer>
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

const ImageWrapper = styled.div`
  width: 55%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProductContent = styled.div`
  width: 40%;
  display: grid;
  gap: 20px;
`;
const PanelWrapper = styled.div`
  background-color: #f1f1f1;
  padding: 20px;
  display: grid;
  gap: 10px;
`;
const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: grid;
  justify-content: center;
  align-items: center;
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
  justify-content: center;
  gap: 20px;
`;
const Ship = styled(BaseText)`
  border: 1px solid black;
  padding: 5px;
`;
const ExcludingTax = styled.p`
  font-weight: bold;
  font-size: 40px;
`;
