import React from "react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl">This website is currently a prototype</h1>
      <div className="p-52 flex flex-col text-right ">
        <strong>
          <h1 className="text-current text-9xl font-bold mb-4">Shane Taylor</h1>
          <p className="text-4xl italic mb-2">
            Software Engineer / Full Stack Developer
          </p>
          <a href="#info">
            <Button className="bg-gray-200 hover:bg-gray-400">
              Learn More
            </Button>
          </a>

          <a href="#info" className="p-3">
            <Button className="bg-red-300 hover:bg-red-600 ">
              Access GeckoCam
            </Button>
          </a>
        </strong>
      </div>
    </div>
  );
};

export default Home;
