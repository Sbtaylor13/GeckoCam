import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FactView = () => {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3001/facts/byID/${id}`).then((response) => {
      setPostObject(response.data);
    });

    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, []);

  const addComment = () => {
    axios
      .post(
        "http://localhost:3001/comments",
        {
          commentText: newComment,
          factBoardId: id,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          const addedCom = {
            commentText: newComment,
            username: response.data.username,
            factBoardId: id, // Assuming response data includes factBoardId
          };
          setComments([...comments, addedCom]);
          setNewComment("");
        }
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  return (
    <>
      <div className="w-screen h-screen bg-zinc-800 pt-10">
        <div className="w-1/5 bg-zinc-700">
          <div className="text-5xl text-yellow-600 pl-5 pr-2">
            <strong>{postObject.title}</strong>
          </div>
          <div className="text-4xl text-yellow-600 pl-5 pr-2 pt-2">
            {postObject.fact}
          </div>
          <div className="text-3xl text-yellow-600 pl-5 pr-2">
            @{postObject.user_id}
          </div>
        </div>
        <br />
        <div className="">
          <input
            type="text"
            placeholder="comment..."
            autoComplete="off"
            value={newComment}
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
          ></input>
          <button
            className="bg-gray-400 rounded-md p-2 ml-5"
            onClick={addComment}
          >
            Add Comment
          </button>
        </div>

        <br />
        <div className="w-2/5 bg-zinc-700">
          <div className="text-4xl text-yellow-600 pl-5 pr-2 pt-2 pb-2">
            <strong>Comments</strong>
          </div>

          {comments.map((comment, key) => {
            return (
              <div key="key" className="text-3xl text-yellow-600 pl-5">
                @{comment.username}: {comment.commentText}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FactView;
