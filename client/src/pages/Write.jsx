import { useState } from "react";
import { GrFormAdd, GrRewind } from "react-icons/gr";
import { usernameAtom } from "../pages/Login";
import { useAtom } from "jotai";
import axios from "axios";

function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [username, setUsername] = useAtom(usernameAtom);
  console.log(username);

  const handleWrite = async (e) => {
    e.preventDefault();
    const newPost = {
      username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const responce = await axios.post("/api/posts", newPost);
      window.location.replace("/post/" + responce?.data._id);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(file);

  return (
    <div className="pt-12">
      {file && (
        <img
          className="ml-40 rounded w-3/4 h-64 object-cover"
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}

      <form
        method="post"
        encType="multipart/form-data"
        onSubmit={handleWrite}
        className="relative"
      >
        <div className="flex ml-40 items-center">
          <label
            className="h-5 w-5 text-center border border-gray-500  mr-3  rounded-full cursor-pointer"
            htmlFor="fileInput"
          >
            <GrFormAdd size={18} className="font-bold" />
          </label>
          <input
            className="hidden"
            type="file"
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="focus:outline-none text-xl w-3/4 p-6"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="ml-44 ">
          <textarea
            className="text-lg focus:outline-none pl-6 w-3/4 h-96 border-2"
            type="text"
            placeholder="write you blog..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button
          className="bg-[#008080] p-2 rounded text-white absolute top-[20px] right-[50px] cursor-pointer"
          type="submit"
        >
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
