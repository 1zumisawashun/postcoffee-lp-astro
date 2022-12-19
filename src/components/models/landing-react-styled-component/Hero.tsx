import styled from "styled-components";
import { Button } from "../../uis";
import PostcoffeeHeader from "/image_postcoffee_header.jpeg";
import { BaseTitle } from "../../../functions/themes";

export const Hero = () => {
  return (
    <HeroContainer>
      <StyledImage
        src={PostcoffeeHeader}
        alt="postcoffee-header"
        width={1280}
        height={720}
      />
      <Block>
        <BaseTitle className="-sub">
          コーヒー診断であなたにぴったりのコーヒーが毎月届く
        </BaseTitle>
        <BaseTitle>
          コーヒーの定期便　
          <br />
          パーソナライズコーヒーBOX
        </BaseTitle>
        <div>
          <Button className="-large">無料でコーヒー診断</Button>
        </div>
      </Block>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  padding: 90px 0 0 0;
  position: relative;
`;
const StyledImage = styled.img`
  width: 100%;
  height: calc(100vh - 90px);
  object-fit: cover;
  margin-bottom: -10px;
`;
const Block = styled.div`
  position: absolute;
  top: calc(50% + 45px);
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  display: grid;
  gap: 40px;
  text-align: center;
`;
