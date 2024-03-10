import React from "react";

const Resume = () => {
  return (
    <div className="container text-2xl text-left mx-[370px] pt-10">
      <h2 className="pb-2">
        <strong className="text-4xl">Internships</strong>
      </h2>
      <div className="flex justify-between ">
        <h2 className="inline justify-start">
          <strong>Lavner Tech Camp - IT Intern</strong>{" "}
        </h2>
        <em className="inline justify-end">May 2023 - Aug. 2023</em>
      </div>

      <ul classname="list-none">
        <li classname="inline-block ">
          ▪ Leveraged expertise in Javascript and Python to create unique coding
          experiences for students in a summer tech camp
        </li>
        <li classname="inline-block ">
          ▪ Assumed the role of camp director during a brief interval,
          overseeing all operational aspects of camp
        </li>
      </ul>

      <br />
      <div className="flex justify-between">
        <h2 className="inline justify-start">
          <strong>Agile Care - Business Development Intern</strong>
        </h2>
        <em className="inline justify-end ">Jan. 2023 - May 2023</em>
      </div>

      <ul>
        <li>
          ▪ Learned proper Incident Response for companies to handle
          cyberattacks and data breaches
        </li>
        <li>
          ▪ Compacted and sorted text from a Cybersecurity contract using python
          code I developed
        </li>
      </ul>
      <br />
      <h2>
        <strong className="text-4xl">Projects</strong>
      </h2>
      <ul className="p-2">
        <li className="p-2">
          <strong>GeckoCam:</strong> Independently developed a website for live
          streaming of my pet Leopard Gecko with use of a Raspberry Pi and my
          skills in HTML, CSS, JavaScript, React, and SQL -{" "}
          <a
            href="https://github.com/Sbtaylor13/GeckoCam"
            className="text-green-600"
            target="_blank"
          >
            GeckoCam Repo
          </a>
        </li>
        <li className="p-2">
          <strong>Twitter Automation:</strong> Utilized Twitter's API to develop
          and manage a bot account programmed to automatically post sentences
          from the DUNE book at hourly intervals -{" "}
          <a
            href="https://github.com/Sbtaylor13/TwitterBot"
            className="text-green-600"
            target="_blank"
          >
            Twitter Bot Repo
          </a>
        </li>
        <li className="p-2">
          <strong>Cookie Clicker Website:</strong> Worked in a team as the front
          end developer of a cookie clicker clone, utilizing scrum workflow to
          push updates to GitHub - live at{" "}
          <a
            href="https://sbtaylor13.github.io/FarmTown/"
            className="text-green-600"
            target="_blank"
          >
            sbtaylor13/FarmTown
          </a>{" "}
          -
          <a
            href="https://github.com/Sbtaylor13/FarmTown/"
            className="text-green-600"
            target="_blank"
          >
            {" "}
            Repo
          </a>
        </li>

        <li className="p-2">
          <strong>Server Management:</strong> Built a Network Attached Server
          that hosts Minecraft using Docker
        </li>
        <li className="p-2">
          <strong>School Clubs:</strong> Was a member of the UMBC Game
          Developers club as well as the Robotics club where I developed code
          and provided invaluable ideas to both
        </li>
        <li className="p-2">
          <strong>Connect Four:</strong> Utilized the Linux kernel to recreate
          Connect Four using C# code as well as Assembly code
        </li>
      </ul>
      <br />
      <h2>
        <strong className="text-4xl">Relevant Courses</strong>
      </h2>
      <p>
        Principles Of Operating Systems ▪ Data Structures ▪ Artificial
        Intelligence (AI) ▪ Software Engineering ▪ Computer Organization and
        Assembly Language ▪ Computer Systems Architecture ▪ Discrete Structures
        ▪ Calculus I-II ▪ Linear Algebra ▪ Statistics ▪ Data Visualization
      </p>
    </div>
  );
};

export default Resume;
