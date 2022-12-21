import { useState } from "react";
import { register } from "../axios/Axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { mutate, error } = useMutation(register, {
    onSuccess: (data) => {
      navigate("/login");
    },
  });

  console.log(username, email, password);

  const handleRegister = (e) => {
    e.preventDefault();
    mutate({ username, email, password });
  };

  return (
    <div className="w-full h-[620px] object-cover  bg-[url('https://img.freepik.com/premium-photo/aesthetic-minimalist-home-office-desk-workspace-white-background-with-blank-copy-space-notes-sheet-laptop-computer-tablet-pad-stationery-business-work-concept-blog-website-social-media_408798-9580.jpg?w=2000')] flex flex-col justify-center items-center">
      <span className="text-6xl">Register</span>
      <form
        onSubmit={handleRegister}
        className="flex flex-col items-center mt-4"
      >
        <label className="text-black font-bold">Username</label>
        <input
          className="p-2 w-64 rounded focus:outline-none"
          type="text"
          placeholder="username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="text-black font-bold">Email</label>
        <input
          className="p-2 w-64 rounded focus:outline-none"
          type="email"
          placeholder="email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-black font-bold">Password</label>
        <input
          className="p-2 w-64 rounded"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="p-2 w-64 mt-4 bg-[#008080] rounded text-white"
        >
          Register
        </button>
      </form>
      <button className="p-2 w-64 mt-4 bg-orange-500 rounded text-white">
        Login
      </button>
    </div>
  );
}

export default Register;
