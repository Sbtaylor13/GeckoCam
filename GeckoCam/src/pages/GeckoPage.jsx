import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import Facts from "@/components/Facts";

const Gecko = () => {
  return (
    <>
      <h1 className=" text-8xl text-yellow-600 text-center bg-zinc-800">
        <strong>GeckoCam</strong>
      </h1>
      {
        <div className="bg-zinc-800 flex justify-center items-center h-screen ">
          <video
            id="my-video"
            className="video-js border-4 border-yellow-600"
            controls
            width="1280"
            height="720"
            autoPlay
            muted
            data-setup="{}"
          >
            <source src="/stream/stream.m3u8" type="application/x-mpegURL" />
          </video>
        </div>
      }
      <div className="bg-zinc-800">
        <Facts />
      </div>
    </>
  );
};

export default Gecko;
