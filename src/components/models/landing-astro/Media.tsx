import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { medias } from "../../../functions/constants/medias";
import "swiper/css";
import { BaseContainer } from "../../../functions/themes";
import { ComboTitle } from "../../uis";
import { MediaCard } from "./MediaCard";

SwiperCore.use([Autoplay]);

export const Media = () => {
  const mediaImages = () => {
    const mediaImages = [];
    for (let i = 0; i < 22; i++) {
      mediaImages.push(
        <ImageWrapper>
          <StyledImage
            src="https://placehold.jp/160x120.png"
            alt="media-image"
            loading="lazy"
          />
        </ImageWrapper>
      );
    }
    return mediaImages;
  };

  const params = {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 100000,
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
    <BaseContainer className="-center">
      <ComboTitle
        headline="今話題のサブスク"
        title={`様々なテレビやメディアで\n話題になっています`}
      />

      <CustomSwiper
        {...params}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {medias.map((media, index) => {
          return (
            <SwiperSlide key={index}>
              <MediaCard media={media} />
            </SwiperSlide>
          );
        })}
      </CustomSwiper>
      <Medias>{mediaImages()}</Medias>
    </BaseContainer>
  );
};

const Medias = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: #f1f1f1;
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  row-gap: 15px;
`;
const ImageWrapper = styled.div`
  width: 15%;
  height: auto;
`;
const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;
const CustomSwiper = styled(Swiper)`
  width: 90%;
  padding: 30px 0;
`;
