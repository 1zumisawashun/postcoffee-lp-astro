import PostcoffeeLogo from "../../assets/images/image_postcoffee_logo.png";
import FacebookLogo from "../../assets/images/image_sns_facebook.png";
import InstagramLogo from "../../assets/images/image_sns_instagram.png";
import TwitterLogo from "../../assets/images/image_sns_twitter.png";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 200px;
  background-color: #f1f1f1;
  display: grid;
`;
const StyledHeaderFooter = styled.div`
  max-width: 1200px;
  height: 90px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const StyledImage = styled.img`
  width: auto;
  height: 40px;
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
const GapWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  &.-gap20 {
    gap: 20px;
  }
`;
const LinkItem = styled.a`
  font-size: 14px;
  display: block;
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
const Copyright = styled.div`
  width: 20%;
  margin: 0 auto;
  color: gray;
  font-weight: bold;
  font-size: 10px;
`;
export const Footer = () => {
  return (
    <StyledFooter>
      <StyledHeaderFooter>
        <GapWrapper>
          <StyledImage src={PostcoffeeLogo} alt="postcoffee-logo" />

          <GapWrapper className="-gap20">
            <StyledIcon src={InstagramLogo} alt="instagram" />
            <StyledIcon src={FacebookLogo} alt="facebook" />
            <StyledIcon src={TwitterLogo} alt="twitter" />
          </GapWrapper>

          <GapWrapper className="-gap20">
            <LinkItem>採用情報</LinkItem>
            <LinkItem>プレスキット</LinkItem>
            <LinkItem>取材に関するお問い合わせ</LinkItem>
            <LinkItem>ご利用規約</LinkItem>
            <LinkItem>プライバシーポリシー</LinkItem>
            <LinkItem>特定商取引法に関する表記</LinkItem>
            <LinkItem>お問い合わせ</LinkItem>
          </GapWrapper>
        </GapWrapper>
      </StyledHeaderFooter>
      <Copyright>
        Copyright © 2020 PostCoffee Co. All rights reserved.
      </Copyright>
    </StyledFooter>
  );
};
