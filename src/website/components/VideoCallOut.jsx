import React from "react";
import Youtube from "./common/Youtube";

function VideoCallOut({ videoCallOut = {} }) {
  const { heading, videoSrc } = videoCallOut;
  return (
    <section className="callout video block">
      <div className="block__inner">
        <h2>{heading}</h2>
        <div className="callout_video">
          <Youtube src={videoSrc} />
        </div>
      </div>
    </section>
  );
}

export default VideoCallOut;
