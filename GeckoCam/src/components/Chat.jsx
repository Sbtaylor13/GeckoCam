import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const [chats, setChats] = useState([]);
  const [newChat, setNewChat] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/chats`).then((response) => {
      setChats(response.data);
    });
  }, []);

  const addChat = () => {
    axios
      .post(
        "http://localhost:3001/chats",
        {
          chatText: newChat,
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
            chatText: newChat,
            username: response.data.username,
          };
          setChats([...chats, setChats]);
          setNewChat("");
        }
      });
  };

  <div className="w-1/2 bg-yellow-700">
    return (
    <div key={key}>
      {comments.map((comment, key) => {
        return (
          <>
            <div key="key">
              {comment.username}: {comment.commentBody}
            </div>
            <button className="bg-gray-400 rounded-md p-2" onClick={addChat}>
              Add Comment
            </button>
          </>
        );
      })}
    </div>
    )
  </div>;
};

export default Chat;
