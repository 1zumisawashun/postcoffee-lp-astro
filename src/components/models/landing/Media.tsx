import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { medias } from "../../../functions/constants/media";
import "swiper/css";

export const Media = () => {
  const mediaImages = () => {
    const mediaImages = [];
    for (let i = 0; i < 22; i++) {
      mediaImages.push(<StyledImage src="https://placehold.jp/100x60.png" />);
    }
    return mediaImages;
  };
  return (
    <MediaContainer>
      <MediaWrapper>
        <Maintitle>今話題のサブスク</Maintitle>
        <Subtitle>
          様々なテレビやメディアで
          <br />
          話題になっています
        </Subtitle>
      </MediaWrapper>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {medias.map((media) => {
          return (
            <SwiperSlide key={media.name}>
              <Headline>{media.headline}</Headline>
              <Text>{media.text}</Text>
              <Line></Line>
              <img src={media.image} alt={media.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
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
  margin: 3%;
`;
const Maintitle = styled.p`
  width: 10%;
  margin: 2% auto;
  font-size: 15px;
  border-bottom: solid 1px black;
`;
const Subtitle = styled.p`
  font-size: 25px;
  font-weight: bold;
`;
const Medias = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 3% 0;
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
const Headline = styled.p`
  width: 100%;
  font-size: 35px;
  font-weight: bold;
`;
const Text = styled.p`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  margin: 1% 0;
`;
const Line = styled.div`
  border-right: 1px solid black;
  width: 50%;
  height: 50px;
  margin: 2% 0;
`;
