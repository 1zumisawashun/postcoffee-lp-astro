import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { feedbacks } from "../../../functions/constants/feedbacks";
import "swiper/css";
import { BaseText } from "../../../functions/themes/BaseText";
import {
  DottedLineThree,
  DottedLineOne,
} from "../../../functions/themes/DottedLine";

SwiperCore.use([Autoplay]);

export const Feedback = () => {
  const params = {
    spaceBetween: 30,
    slidesPerView: 4,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
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
    <FeedbackContainer>
      <Title></Title>
      <Swiper
        {...params}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {feedbacks.map((feedback) => {
          return (
            <SwiperSlide key={feedback.name}>
              <FeedbackCardContainer>
                <GapWrapper>
                  <StyledImage src={feedback.image} alt="" />
                  <Block>
                    <StyledIcon
                      src={feedback.avatar}
                      alt="lifehacker"
                      className="image"
                    />

                    <Name>{feedback.name}</Name>
                  </Block>
                  <DottedLineThree>{feedback.text}</DottedLineThree>
                </GapWrapper>
              </FeedbackCardContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </FeedbackContainer>
  );
};

const FeedbackContainer = styled.div`
  width: 90%;
  margin: 5% auto;
  background-color: white;
`;
const Title = styled.p`
  font-family: initial;
  font-size: 30px;
  margin: 3% 0;
`;
const FeedbackCardContainer = styled.div`
  border: 1px solid #f1f1f1;
  padding: 10%;
  border-radius: 1rem;
`;
const Block = styled.div`
  display: flex;
  align-items: center;
`;
const StyledIcon = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;
const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;
const Name = styled(DottedLineOne)`
  color: gray;
`;
const GapWrapper = styled.div`
  display: grid;
  gap: 10px;
`;
