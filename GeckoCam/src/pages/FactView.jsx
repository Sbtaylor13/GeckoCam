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
          commentBody: newComment,
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
            commentBody: newComment,
            username: response.data.username,
          };
          setComments([...comments, addedCom]);
          setNewComment("");
        }
      });
  };

  return (
    <>
      <div>
        <div>{postObject.title}</div>
        <div>{postObject.fact}</div>
        <div>{postObject.user_id}</div>
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
        <button className="bg-gray-400 rounded-md p-2" onClick={addComment}>
          Add Comment
        </button>
      </div>
      <br />
      <div className="">
        {comments.map((comment, key) => {
          return (
            <div key="key">
              {comment.username}: {comment.commentBody}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FactView;
