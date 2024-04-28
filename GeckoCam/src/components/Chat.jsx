import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const [allChat, setChat] = useState([]);
  const [newChat, setNewChat] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchChatData();
  }, []);

  const fetchChatData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/chat", {
        headers: { accessToken: localStorage.getItem("accessToken") || "" },
      });
      setChat(response.data);
    } catch (error) {
      console.error("Error fetching chat data:", error);
      setChat([]); // Set an empty array if there's an error to prevent crashing
    }
  };

  const addChat = async () => {
    try {
      if (newChat.trim() === "") {
        setErrorMessage("No Empty Messages");
        return;
      }

      const response = await axios.post(
        "http://localhost:3001/chat",
        {
          chatText: newChat,
        },
        {
          headers: { accessToken: localStorage.getItem("accessToken") || "" },
        }
      );
      if (!response.data || !response.data.username) {
        throw new Error("Bad Data");
      }

      const newChatMessage = {
        chatText: newChat,
        username: response.data.username,
      };

      // Update chat messages with the new message
      setChat((prevChat) => [...prevChat.slice(-9), newChatMessage]); // Keep only the last 10 messages
      setNewChat(""); // Clear input after sending chat
      setErrorMessage(""); // Clear error message
    } catch (error) {
      console.error("Error adding chat:", error);
      setErrorMessage("Failed to add chat message. Please try again.");
    }
  };

  return (
    <div className="">
      <div className="fixed right-0 h-screen w-1/5 bg-orange-500 flex flex-col p-8 -mt-9">
        <h2 className="text-white text-lg mb-4">GeckoChat</h2>

        <div className="overflow-y-auto pt-3">
          {/* Display the last 10 chat messages */}
          {Array.isArray(allChat) &&
            allChat.slice(-10).map((message, index) => (
              <div
                key={index}
                className="p-2 bg-white mb-3 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              >
                <strong>{message.username}</strong>: {message.chatText}
              </div>
            ))}
        </div>
        <input
          type="text"
          placeholder="Type your message..."
          value={newChat}
          onChange={(event) => {
            setNewChat(event.target.value);
            setErrorMessage("");
          }}
          className="p-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={addChat}
          className="bg-white p-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        >
          Send
        </button>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Chat;
