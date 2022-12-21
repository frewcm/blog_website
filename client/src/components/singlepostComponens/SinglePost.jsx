import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { usernameAtom } from "../../pages/Login";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";

function SinglePost() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const PF = "http://localhost:5000/images/";
  const [username, setUsername] = useAtom(usernameAtom);
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const { data: postPage } = useQuery(["single_post"], async () => {
    const response = await axios.get("/api/posts/" + path);

    return response.data;
  });
  useEffect(() => {
    setTitle(postPage?.title);
    setDesc(postPage?.desc);
  }, [updateMode]);
  console.log(postPage?.username);
  console.log(path);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${postPage?._id}`, { data: { username } });
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`/api/posts/${postPage?._id}`, { username, title, desc });
      // setUpdateMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-3/4 pb-10">
      <div className="p-5 pr-0 ">
        <img
          className="w-full h-80 rounded object-cover"
          src={PF + postPage?.photo}
          alt="image of singlePostPage"
        />
        {updateMode ? (
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="w-full  text-2xl font-bold text-gray-600 ml-96 mt-5 h-10  pl-2 focus:outline-none"
            value={title}
            placeholder="Title"
          />
        ) : (
          <div className="flex justify-between mt-5">
            <p className="text-center text-gray-600 text-2xl ml-96 font-bold">
              {postPage?.title}
            </p>
            {postPage?.username === username && (
              <div className="flex items-center mr-4">
                <BiEdit
                  className="mr-1 text-[#008080]"
                  size={20}
                  onClick={() => setUpdateMode(true)}
                />
                <RiDeleteBin6Line
                  className="ml-1 text-red-400"
                  size={20}
                  onClick={handleDelete}
                />
              </div>
            )}
          </div>
        )}
        <div className="p-2">
          <span className="flex justify-between items-center">
            <p className="text-md text-orange-500">
              Author:
              <Link to={`/?user=${postPage?.username}`}>
                {postPage?.username}
              </Link>
            </p>
            <p className="text-md text-orange-500">
              {new Date(postPage?.createdAt).toDateString()}
            </p>
          </span>
        </div>
        {updateMode ? (
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            placeholder="edit your blog..."
            value={desc}
            className="leading-7 first-letter:text-3xl first-letter:ml-4 first-letter:font-bold first-letter:uppercase text-lg text-gray-600 focus:outline-none pl-6 w-full h-auto"
          />
        ) : (
          <p className="text-gray-600 leading-7 first-letter:text-3xl first-letter:ml-4 first-letter:font-bold first-letter:uppercase">
            {postPage?.desc}
          </p>
        )}
        {updateMode && (
          <div className="flex justify-end">
            <button
              onClick={handleUpdate}
              className="text-white px-3 py-1 ml-2 rounded bg-[#008080]"
            >
              Update
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
