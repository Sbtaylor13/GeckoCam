import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) alert(response.data.error);
      else {
        localStorage.setItem("accessToken", response.data);
        navigate("/");
      }
    });
  };
  return (
    <div className="w-screen h-screen bg-zinc-800 pt-10">
      <label className="text-yellow-600 pl-8 pr-2">Username:</label>
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <label className="text-yellow-600 pl-8 pr-2">Password:</label>
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button
        onClick={login}
        className="ml-8 pl-5 pr-5 pt-2 pb-2 text-black bg-yellow-600"
      >
        {" "}
        Login{" "}
      </button>
    </div>
  );
};

export default LoginUser;
