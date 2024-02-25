import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import video from "/test.mp4";

const Gecko = () => {
  return (
    <video
      id="my-video"
      class="video-js"
      controls
      width="1280"
      height="720"
      autoPlay
      muted
      data-setup="{}"
    >
      <source
        src="http://10.0.0.189/hls/stream.m3u8"
        type="application/x-mpegURL"
      />
    </video>
  );
};

export default Gecko;
