import styled from "styled-components";
import { Button } from "../../uis/Button";
import PostcoffeeHeader from "../../../assets/images/image_postcoffee_header.jpeg";

export const Hero = () => {
  return (
    <HeroContainer>
      <StyledImage src={PostcoffeeHeader} alt="postcoffee-header" />
      <TitleWrapper>
        <Subtitle>コーヒー診断であなたにぴったりのコーヒーが毎月届く</Subtitle>
        <Maintitle>コーヒーの定期便 パーソナライズコーヒーBOX</Maintitle>

        <ButtonWrapper>
          <Button>無料でコーヒー診断</Button>
        </ButtonWrapper>
      </TitleWrapper>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  width: 100%;
  height: 835px;
  position: relative;
`;
const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
const TitleWrapper = styled.div`
  width: 60%;
  height: 500px;
  margin: 0 auto;
  position: absolute;
  top: 20%;
  left: 20%;
`;
const Subtitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin: 3%;
`;
const Maintitle = styled.p`
  font-weight: bold;
  font-size: 50px;
`;
const ButtonWrapper = styled.div`
  width: 50%;
  height: auto;
  margin: 10% 25% 0;
`;
