import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { feedbacks } from "../../../functions/constants/feedbacks";
import "swiper/css";

SwiperCore.use([Autoplay]);

export const Feedback = () => {
  const params = {
    spaceBetween: 30,
    slidesPerView: 4,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
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
                <div className="picture">
                  <img src={feedback.image} alt="" />
                </div>
                <div className="user">
                  <Block>
                    <StyledIcon
                      src={feedback.avatar}
                      alt="lifehacker"
                      className="image"
                    />

                    <Name>{feedback.name}</Name>
                  </Block>
                  <Text>{feedback.text}</Text>
                </div>
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
  height: auto;
  background-color: white;
`;
const Title = styled.p`
  font-family: initial;
  font-size: 30px;
  margin: 3% 0;
`;
const FeedbackCardContainer = styled.div`
  border: 1px solid #f1f1f1;
  padding: 8% 0;
  margin: 0 6%;
  border-radius: 1rem;
`;
const Block = styled.div`
  width: 250px;
  margin: 0 auto;
  display: flex;
`;
const StyledIcon = styled.img`
  border-radius: 50%;
  margin: 0 20%;
`;
const Name = styled.p`
  line-height: 50px;
  margin: 0 10%;
  color: gray;
  font-size: 13px;
  font-weight: bold;
`;
const Text = styled.p`
  width: 250px;
  margin: 0 auto;
  font-size: 12px;
  font-weight: bold;
`;
