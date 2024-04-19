import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import Facts from "@/components/Facts";
import Chat from "@/components/Chat";

const Gecko = () => {
  return (
    <>
      <Chat />

      {
        <div className="bg-zinc-800  flex justify-center items-center h-screen w-4/5 pl-9 ">
          <div className="w-11/12 relative aspect-auto ">
            <strong className="flex text-8xl z-0 text-yellow-600">
              GeckoCam
            </strong>
            <video
              id="my-video"
              className="video-js border-4 border-yellow-600"
              controls
              max-height={4 / 5}
              autoPlay
              muted
              data-setup="{}"
            >
              <source src="/stream/stream.m3u8" type="application/x-mpegURL" />
            </video>
          </div>
        </div>
      }
      <div className="bg-zinc-800">
        <Facts />
      </div>
    </>
  );
};

export default Gecko;
