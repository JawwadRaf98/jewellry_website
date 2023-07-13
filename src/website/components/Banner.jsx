import React from "react";
import bannerVideo from "../dist/webImages/banner/SDC.webm";
import BannerSwiper from "./common/BannerSwiper";
import Video from "./common/Video";

function Banner({ banner }) {
  return (
    <section className="banner">
      <div className="banner__video">
        <Video src={bannerVideo} />
      </div>
      <div className="banner__slider">
        <BannerSwiper
          bannerSlides={banner.bannerSlides}
          delay={2500}
          name="mySwiper slider"
        />
      </div>
    </section>
  );
}

export default Banner;
