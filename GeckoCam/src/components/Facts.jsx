import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Facts() {
  const [listOfPosts, setListOfPosts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    //fetch data from an API
    axios.get("http://localhost:3001/facts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  const likePost = (factBoardId) => {
    axios
      .post(
        "http://localhost:3001/likes",
        { factBoardId: factBoardId },
        { headers: { accessToken: localStorage.getItem("accessToken") } }
        //this sends username back to table (nothing happens to table if user not logged in)
      )
      .then((response) => {
        history.go();
      });
  };
  return (
    <div className=" w-4/5 h-auto flex pw-10 flex-wrap">
      {listOfPosts.map((value, key) => {
        return (
          <div
            key={key}
            className="flex w-64 h-32 rounded-lg flex-col mt-50 m-3 border border-solid border-black font-sans shadow-md cursor-pointer"
          >
            <div
              className="flex-1/5 border-b border-solid border-black bg-yellow-400 grid place-items-center "
              onClick={() => navigate(`/fact/${value.id}`)}
            >
              {value.title}
            </div>
            <div
              className="h-3/5 grid bg-white place-items-center"
              onClick={() => navigate(`/fact/${value.id}`)}
            >
              {value.fact}
            </div>
            <div
              className="flex-1/5 border-t border-solid border-black items-center pl-3 bg-yellow-400 "
              onClick={() => navigate(`/fact/${value.id}`)}
            >
              @{value.user_id}{" "}
              <label className="float-right pr-3">🔺{value.likes.length}</label>
            </div>
            <button
              className="bg-red-800"
              onClick={() => {
                likePost(value.id);
              }}
            >
              upvote
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Facts;
