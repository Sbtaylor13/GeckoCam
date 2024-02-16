import React from "react";
import Navbar from "./components/navbar";
import Gecko from "./pages/Gecko";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

const App = () => {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/Resume":
      Component = Resume;
      break;
    case "/Gecko":
      Component = Gecko;
      break;
  }
  return (
    <>
      <Navbar />
      <div className="text-white text-center text-6xl p-3">
        <Component />
      </div>
    </>
  );
};

export default App;
