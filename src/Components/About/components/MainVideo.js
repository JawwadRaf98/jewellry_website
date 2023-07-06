import React from "react";
import video from "../../Assets/jewellery.mp4";

const MainVideo = () => {
  return (
    <video disableRemotePlayback autoPlay loop muted id="aboutVideo">
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default MainVideo;
