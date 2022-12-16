import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { medias } from "../../../functions/constants/medias";
import "swiper/css";
import { BaseText } from "../../../functions/themes/BaseText";
import { BaseTitle } from "../../../functions/themes/BaseTitle";

SwiperCore.use([Autoplay]);

export const Media = () => {
  const mediaImages = () => {
    const mediaImages = [];
    for (let i = 0; i < 22; i++) {
      mediaImages.push(<StyledImage src="https://placehold.jp/100x60.png" />);
    }
    return mediaImages;
  };

  const params = {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <MediaContainer>
      <MediaWrapper>
        <Headline>今話題のサブスク</Headline>
        <BaseTitle className="-sub">
          様々なテレビやメディアで
          <br />
          話題になっています
        </BaseTitle>
      </MediaWrapper>
      <CustomSwiper
        {...params}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {medias.map((media) => {
          return (
            <SwiperSlide key={media.name}>
              <BaseTitle>{media.headline}</BaseTitle>
              <BaseTitle className="-sub">{media.text}</BaseTitle>
              <Line></Line>
              <img src={media.image} alt={media.name} />
            </SwiperSlide>
          );
        })}
      </CustomSwiper>
      <Medias>{mediaImages()}</Medias>
    </MediaContainer>
  );
};

const MediaContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #f1f1f1;
  padding: 5% 0 0;
  text-align: center;
`;
const MediaWrapper = styled.div`
  display: inline-grid;
  justify-items: center;
  gap: 20px;
`;
const Headline = styled(BaseText)`
  border-bottom: solid 1px black;
`;
const Medias = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 30px 0;
  background-color: #f1f1f1;
  display: flex;
  flex-wrap: wrap;
  gap: calc((100 - 15 * 6) / 5);
  row-gap: 20px;
  column-gap: 20px;
`;
const StyledImage = styled.img`
  width: 15%;
`;
const CustomSwiper = styled(Swiper)`
  width: 90%;
  padding: 30px 0;
`;
const Line = styled.div`
  border-right: 1px solid black;
  width: 50%;
  height: 50px;
  margin: 2% 0;
`;
