import React from "react";
import "swiper/css/effect-fade";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper";
import Button from "./Button";
import { ModalDailogContext } from "../../context/ModalDailogContext";
function BannerSwiper({ bannerSlides, delay, name }) {
  const { handleDailog } = React.useContext(ModalDailogContext);
  SwiperCore.use([EffectFade, Autoplay, Pagination, Navigation]);
  return (
    <Swiper
      effect={"fade"}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: delay,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className={name}
    >
      {bannerSlides &&
        bannerSlides.map(({ heading, subText }, index) => {
          return (
            <SwiperSlide key={index}>
              <h2>{heading}</h2>
              <h3>{subText}</h3>
              <Button id="demo" text={"Get started"} onClick={handleDailog} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}

export default BannerSwiper;
