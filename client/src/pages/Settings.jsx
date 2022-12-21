import SideBar from "../components/homeComponents/SideBar";
import { BiUserCircle } from "react-icons/bi";
import axios from "axios";
import { useState } from "react";
import { useAtom } from "jotai";
import { userIdAtom, userImageAtom, usernameAtom } from "../pages/Login";

function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useAtom(userIdAtom);
  const [profilePicture, setProfilePicture] = useAtom(userImageAtom);
  const [success, setSuccess] = useState(false);

  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePicture = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.put("/api/users/" + id, updatedUser);
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(id);
  return (
    <div className="flex">
      <div className="w-3/4 mt-3 ml-10 p-5">
        <div className="flex justify-between">
          <span className="text-2xl text-orange-400 mb-4">
            Update Your Account
          </span>
          <span className="text-md text-orange-400">Delete Account</span>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="">Profile Picture</label>
          <div className="flex items-center mt-2">
            <img
              className="w-16 mb-2 rounded mr-4 cursor-pointer"
              src={file ? URL.createObjectURL(file) : PF + profilePicture}
              alt="image"
            />

            <label
              className="bg-orange-400 w-6 h-6 items-center rounded-full"
              htmlFor="fileInput"
            >
              <BiUserCircle className="text-white " size={23} />
            </label>
            <input
              className="hidden"
              type="file"
              id="fileInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="flex flex-col">
            <label className="mt-5">Username</label>
            <input
              className="mt-5 h-7 border border-b-gray-500 focus:outline-none"
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="mt-5">Email</label>
            <input
              className="mt-5 h-7 border border-b-gray-500 focus:outline-none"
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="mt-5 ">Password</label>
            <input
              className="mt-5 h-7 border border-b-gray-500 focus:outline-none"
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-36 h-8 bg-[#008080] rounded text-white mt-4 cursor-pointer"
            >
              Update
            </button>
          </div>

          {success && (
            <div className="bg-green-100 rounded p-2 flex justify-center mt-5">
              <p className="text-green-600 ">Updated Successfully</p>
            </div>
          )}
        </form>
      </div>
      <SideBar />
    </div>
  );
}

export default Settings;
