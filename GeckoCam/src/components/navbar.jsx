import React from "react";
import STimage from "/src/icon.png";

const navbar = () => {
  return (
    <nav className="bg-zinc-900 text-white flex justify-between items-center gap-2 px-3 py-4 text-3xl">
      <a href="/" className="text-5xl">
        <img src={STimage} className="w-20 h-20 mr-2" />
      </a>
      <ul className="p-0 m-0 list-none flex gap-8 cursor-col-resize">
        <li>
          <a className="hover:bg-gray-500 rounded p-1" href="/Gecko">
            GeckoCam
          </a>
        </li>
        <li>
          <a className="hover:bg-gray-500 rounded p-1" href="/Resume">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
