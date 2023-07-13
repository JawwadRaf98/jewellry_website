import React from "react";

function Video({ src }) {
  return (
    <video autoPlay={true} muted={true} loop={true} style={{ width: "100%" }}>
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default Video;
