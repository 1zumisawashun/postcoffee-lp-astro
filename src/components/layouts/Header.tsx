import PostcoffeeLogo from "../../assets/images/image_postcoffee_logo.png";
import InstagramLogo from "../../assets/images/image_sns_instagram.png";
import TwitterLogo from "../../assets/images/image_sns_twitter.png";
import styled, { css } from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 90px;
  position: fixed;
  background-color: white;
  z-index: 1;
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
`;
const GapWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const LinkItem = styled.a`
  font-weight: bold;
  font-size: 16px;
`;
const StyledIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const Button = styled.button<{ outlined?: boolean }>`
  display: inline-block;
  padding: 0.5rem 0;
  width: 11rem;
  background: transparent;
  color: white;
  background: black;
  border-radius: 30px;
  border: 1px solid black;
  ${(props) =>
    props.outlined &&
    css`
      background: white;
      color: black;
    `}
  :hover {
    opacity: 0.8;
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
