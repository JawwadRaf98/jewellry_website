import React from "react";

function Youtube({ src, height }) {
  return (
    <iframe
      src={src}
      height={height && 500}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen=""
    ></iframe>
  );
}

export default Youtube;
