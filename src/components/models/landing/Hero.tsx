import styled from "styled-components";
import { Button } from "../../uis/Button";
import PostcoffeeHeader from "../../../assets/images/image_postcoffee_header.jpeg";

export const Hero = () => {
  return (
    <HeroContainer>
      <StyledImage src={PostcoffeeHeader} alt="postcoffee-header" />
      <Block>
        <Subtitle>コーヒー診断であなたにぴったりのコーヒーが毎月届く</Subtitle>
        <Maintitle>
          コーヒーの定期便　
          <br />
          パーソナライズコーヒーBOX
        </Maintitle>
        <ButtonWrapper>
          <Button className="-large">無料でコーヒー診断</Button>
        </ButtonWrapper>
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
`;
const Subtitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;
const Maintitle = styled.p`
  font-weight: bold;
  font-size: 50px;
  text-align: center;
`;
const ButtonWrapper = styled.div`
  text-align: center;
`;
