import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const Gecko = () => {
  return (
    <>
      <h1 className="bg-zinc-800 p-3 text-8xl text-color-black text-center">
        <strong>GeckoCam</strong>
      </h1>
      <body class="bg-zinc-800 flex justify-center items-center h-screen -m-20">
        <video
          id="my-video"
          class="video-js border-4 border-zinc-950"
          controls
          width="1280"
          height="720"
          autoPlay
          muted
          data-setup="{}"
        >
          <source src="/stream/stream.m3u8" type="application/x-mpegURL" />
        </video>
      </body>
    </>
  );
};

export default Gecko;
