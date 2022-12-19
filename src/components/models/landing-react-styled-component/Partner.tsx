import styled from "styled-components";
import { PartnerCard } from "./PartnerCard";
import { partners } from "../../../functions/constants/partners";
import { BaseText } from "../../../functions/themes";
import RoasterPartnerLogo from "../../../assets/images/image_roaster_partner_logo.png";
import RoasterBg from "../../../assets/images/image_roaster_bg.jpeg";

export const Partner = () => {
  return (
    <PartnerContainer>
      <StyledBgImage src={RoasterBg} alt="roaster-bg" loading="lazy" />
      <Block>
        <StyledImage
          src={RoasterPartnerLogo}
          alt="roaster-partner-logo"
          loading="lazy"
        />
        <BaseText className="-white -bold">
          世界中の有名ロースターがパートナーに参画し、世界中のコーヒーをあなたの好みを届けるサービスへとアップデート
        </BaseText>
        <BaseText className="-white -bold">
          自宅でも日本全国、また、世界各地のロースターの味を楽しんでいただけるよう、ロースターパートナーに参画していただき、世界中のコーヒーからあなた好みを届けるサービスへとアップデートしました。第一弾となる今回は、日本の屈指のロースター10社から個性豊かなコーヒー豆を取り揃えています。
        </BaseText>
        <FlexWrapper>
          {partners.map((partner) => (
            <PartnerCard partner={partner} />
          ))}
        </FlexWrapper>
      </Block>
    </PartnerContainer>
  );
};

const PartnerContainer = styled.div`
  position: relative;
`;
const StyledBgImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: -10px;
`;
const StyledImage = styled.img`
  width: 30%;
  height: auto;
  margin: auto;
  object-fit: cover;
`;
const Block = styled.div`
  position: absolute;
  width: 70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  display: grid;
  gap: 40px;
  text-align: center;
`;
const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
