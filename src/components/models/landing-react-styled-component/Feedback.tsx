import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { feedbacks } from "../../../functions/constants/feedbacks";
import "swiper/css";
import { BaseTitle, BaseContainer } from "../../../functions/themes";
import { FeedbackCard } from "./FeedbackCard";

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
    <BaseContainer className="-white -center">
      <FeedbackWrapper>
        <CustomTitle className="-normal">Enjoy your lifestyle.</CustomTitle>
        <Swiper
          {...params}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {feedbacks.map((feedback) => {
            return (
              <SwiperSlide key={feedback.name}>
                <FeedbackCard feedback={feedback} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </FeedbackWrapper>
    </BaseContainer>
  );
};

const FeedbackWrapper = styled.div`
  width: 90%;
  margin: auto;
`;
const CustomTitle = styled(BaseTitle)`
  margin-bottom: 30px;
`;
