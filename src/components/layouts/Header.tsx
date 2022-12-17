import PostcoffeeLogo from "../../assets/images/image_postcoffee_logo.png";
import InstagramLogo from "../../assets/images/image_sns_instagram.png";
import TwitterLogo from "../../assets/images/image_sns_twitter.png";
import styled from "styled-components";
import { Button } from "../uis";

const StyledHeader = styled.header`
  width: 100%;
  height: 90px;
  position: fixed;
  background-color: white;
  z-index: 9999;
`;
const StyledHeaderWrapper = styled.div`
  max-width: 1200px;
  height: 90px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const StyledImage = styled.img`
  width: auto;
  height: 50px;
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
const GapWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const LinkItem = styled.a`
  font-weight: bold;
  font-size: 16px;
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
const StyledIcon = styled.img`
  width: 20px;
  height: 20px;
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <GapWrapper>
          <StyledImage src={PostcoffeeLogo} alt="postcoffee-logo" />
          <LinkItem>ABOUT</LinkItem>
          <LinkItem>STORE</LinkItem>
          <LinkItem>FAQ</LinkItem>
          <LinkItem>MAGAGINE</LinkItem>
          <StyledIcon src={InstagramLogo} alt="instagtram" />
          <StyledIcon src={TwitterLogo} alt="twitter" />
        </GapWrapper>

        <GapWrapper>
          <Button outlined>無料でコーヒー診断</Button>
          <Button>LOGIN</Button>
        </GapWrapper>
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};
