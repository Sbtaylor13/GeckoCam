import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[url('./assets/grey.png')] bg-no-repeat bg-cover w-screen h-screen -ml-4 -mt-4">
      <h1 className="text-5xl">This website is still in development</h1>
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
          <br />
          <Button className=" bg-red-200 hover:bg-red-400">
            <Link target="_blank" to="/Gecko">
              GeckoCam
            </Link>
          </Button>
        </strong>
      </div>
    </div>
  );
};

export default Home;
