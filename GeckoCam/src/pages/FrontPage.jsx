import React from "react";
import Home from "@/components/Home.jsx";
import Resume from "@/components/Resume.jsx";
import Info from "@/components/Info.jsx";

const FrontPage = () => {
  return (
    <div className="bg-black font-[style] h-screen text-white text-center text-6xl p-3">
      <Home />
      <Info />
      <Resume />
    </div>
  );
};

export default FrontPage;
