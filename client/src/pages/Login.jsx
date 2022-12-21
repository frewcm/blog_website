import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../axios/Axios";
import { atom, useAtom } from "jotai";

const userToken = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
export const tokenAtom = atom(userToken);

const userName = localStorage.getItem("username")
  ? JSON.parse(localStorage.getItem("username"))
  : null;
export const usernameAtom = atom(userName);

const userId = localStorage.getItem("id")
  ? JSON.parse(localStorage.getItem("id"))
  : null;
export const userIdAtom = atom(userId);

const userImage = localStorage.getItem("profilePicture")
  ? JSON.parse(localStorage.getItem("profilePicture"))
  : null;
export const userImageAtom = atom(userImage);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useAtom(tokenAtom);
  const [username, setUsername] = useAtom(usernameAtom);
  const [id, setId] = useAtom(userIdAtom);
  const [profilePicture, setProfilePicture] = useAtom(userImageAtom);
  const navigate = useNavigate();

  const { mutate, isError, error } = useMutation(login, {
    onSuccess: (data) => {
      localStorage.setItem("currentUser", JSON.stringify(data.token));
      localStorage.setItem("username", JSON.stringify(data.username));
      localStorage.setItem("id", JSON.stringify(data.id));
      localStorage.setItem(
        "profilePicture",
        JSON.stringify(data.profilePicture)
      );
      setToken(data?.token);
      setUsername(data?.username);
      setId(data?._id);
      setProfilePicture(data?.profilePicture);
      navigate("/");
      console.log(data);
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return (
    <div className="w-full h-[620px] object-cover  bg-[url('https://img.freepik.com/premium-photo/aesthetic-minimalist-home-office-desk-workspace-white-background-with-blank-copy-space-notes-sheet-laptop-computer-tablet-pad-stationery-business-work-concept-blog-website-social-media_408798-9580.jpg?w=2000')] flex flex-col justify-center items-center">
      <span className="text-6xl">Login</span>
      <form onSubmit={handleLogin} className="flex flex-col items-center mt-4">
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
          className="p-2 w-64 rounded focus:outline-none"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="p-2 w-64 mt-4 bg-orange-500 rounded text-white"
        >
          Log In
        </button>
        {isError && (
          <span className="bg-red-200 text-red-800">{error.message}</span>
        )}
      </form>
      <Link
        to="/register"
        className="p-2 w-64 mt-4 bg-[#008080] text-center rounded text-white"
      >
        Register
      </Link>
    </div>
  );
}

export default Login;
