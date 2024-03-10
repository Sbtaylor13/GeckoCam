import React from "react";
import Navbar from "./components/navbar";
import Gecko from "./Gecko";
import Home from "./Home";
import Resume from "./Resume";
import Info from "./Info";

const App = () => {
  return (
    <>
      <div className="bg-black font-[style] h-screen text-white text-center text-6xl p-3">
        <div className="bg-[url('./assets/grey.png')] bg-no-repeat bg-cover w-screen h-screen -ml-4 -mt-4">
          <Home />
        </div>
        <div id="info" className="w-screen -ml-4 -mt-4 h-3/5 bg-black">
          <Info />
        </div>
        <div className="w-screen -ml-4 -mt-4 h-full">
          <Resume />
        </div>
      </div>
    </>
  );
};

export default App;
