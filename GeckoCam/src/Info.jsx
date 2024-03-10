import React from "react";
import { Separator } from "@/components/ui/separator";

const Info = () => {
  return (
    <div className="">
      <div className="pt-32 ml-[400px] max-w-sm text-left">
        <h1 className="text-2xl mb-2 font-bold">
          Name:{" "}
          <h1 className="p-3 text-2xl mb-2 font-normal inline">
            {" "}
            Shane Taylor
          </h1>
        </h1>
        <Separator />
        <h1 className="text-2xl mb-2 font-bold">
          Pronouns:
          <h1 className="p-3 text-2xl mb-2 font-normal inline"> He/Him</h1>
        </h1>
        <Separator />
        <h1 className="text-2xl mb-2 font-bold">
          School:
          <h1 className="p-3 text-2xl mb-2 font-normal inline"> UMBC</h1>
        </h1>
        <Separator />
        <h1 className="text-2xl mb-2 font-bold">
          Age:
          <h1 className="p-3 text-2xl mb-2 font-normal inline"> 21</h1>
        </h1>
        <Separator />
        <h1 className="text-2xl mb-2 font-bold">
          Location:
          <h1 className="p-3 text-2xl mb-2 font-normal inline"> Maryland</h1>
        </h1>
      </div>

      <div className="flex justify-end mr-[200px]">
        <h1 className="text-current text-4xl font-bold mb-4">
          Coding Languages
        </h1>
        <br />
        <p className=" text-2xl mb-2">
          JavaScript | C++ | SQL | HTML | CSS | Python | Java | C
        </p>
      </div>
    </div>

    /*
    <div className="mx-[400px] pt-10 flex flex-col text-left ">
      <h1 className="text-current text-4xl font-bold mb-4">Shane Taylor</h1>
      <p className=" text-2xl mb-2">
        I'm a Computer Scientist seeking work in a Software or Web Development
        role. I am currently enrolled in the University of Maryland, Baltimore
        County and will be receiving my Computer Science Bachelor's Degree in
        May.
      </p>
      <br />
      <h1 className="text-current text-4xl font-bold mb-4">Coding Languages</h1>
      <p className=" text-2xl mb-2">
        JavaScript | C++ | SQL | HTML | CSS | Python | Java | C
      </p>
    </div>
  
  */
  );
};

export default Info;
