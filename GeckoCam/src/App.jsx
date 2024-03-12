import React from "react";
import Navbar from "./components/navbar";
import Gecko from "./pages/GeckoPage";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Info from "./components/Info";

const App = () => {
  return (
    <>
      <div>
        <Home />
        <Info />
        <Resume />
      </div>
    </>
  );
};

export default App;
