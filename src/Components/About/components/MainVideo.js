import React from "react";
import video from "../../Assets/jewellery.mp4";

const MainVideo = ({customClass}) => {
  return (
    <video disableRemotePlayback autoPlay loop muted id="aboutVideo" className={`${customClass}`}>
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default MainVideo;
