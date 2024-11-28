import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { S } from "./Slider_Styles";
import { initialState } from "../../features/initialState";
import { Text } from "../Text";

const reviewsData = initialState.reviews;

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};

export const Slider = () => (
  <S.Slider>
    <h3>Отзывы</h3>
    <AliceCarousel
      responsive={responsive}
      mouseTracking
      items={reviewsData.map((review) => {
        return (
          <>
            <Text textAlign={"center"} maxWidth={'500px'} width={'100%'} fontWeight={'300'}>{review.review}</Text>
            <span>{review.name}</span>
          </>
        );
      })}
    />
  </S.Slider>
);
