import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Facts() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/facts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div className=" w-full h-auto flex pw-10 ">
      {listOfPosts.map((value, key) => {
        return (
          <div className="flex w-64 h-32 rounded-lg flex-col mt-50 m-3 border border-solid border-black font-sans shadow-md cursor-pointer">
            <div className="flex-1/5 border-b border-solid border-black bg-yellow-600 grid place-items-center ">
              {value.title}
            </div>
            <div className="h-3/5 grid bg-white place-items-center">
              {value.fact}
            </div>
            <div className="flex-1/5 border-t border-solid border-black flex items-center pl-3 bg-yellow-600 ">
              @{value.user_id}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Facts;
