import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare, FaPinterestSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { userImageAtom } from "../../pages/Login";

function SideBar() {
  const [profilePicture, setProfilePicture] = useAtom(userImageAtom);

  const PF = "http://localhost:5000/images/";

  const { data: catagories } = useQuery(["catagories"], async () => {
    const response = await axios.get("/api/catagories");
    return response.data;
  });
  return (
    <div className="w-1/4 flex flex-col items-center mt-10">
      <div className="flex flex-col justify-center w-60">
        <span className="w-60 text-center border border-l-white border-r-white text-gray-600  border-t-gray-500 border-b-gray-500 mt-4 mb-6 ">
          ABOUT ME
        </span>
        <img
          className="w-60 mb-2 rounded mr-4 cursor-pointer"
          src={profilePicture ? PF + profilePicture : "/noavatar-2.jpg"}
          alt="storm trooper"
        />
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          deserunt maiores
        </p>
      </div>
      <div className="flex flex-col mt-3 items-center">
        <span className="w-60 text-center border border-l-white border-r-white text-gray-600  border-t-gray-500 border-b-gray-500 mt-4 mb-2 ">
          CATAGORIES
        </span>
        <ul className="grid grid-cols-2 gap-3 mt-4">
          {catagories?.map((cat, index) => {
            return (
              <Link to={`/?cat=${cat?.name}`} key={index}>
                <li className="mr-5">{cat?.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col mt-7 items-center">
        <span className="w-60 text-center border border-l-white border-r-white text-gray-600  border-t-gray-500 border-b-gray-500 mt-4 mb-6 ">
          FOLLOW US
        </span>
        <div className="grid grid-cols-4 gap-1">
          <i>
            <AiFillFacebook
              className="mr-2.5 text-gray-600 cursor-pointer"
              size={20}
            />
          </i>
          <i>
            <AiFillTwitterSquare
              className="mr-2.5 text-gray-600 cursor-pointer"
              size={20}
            />
          </i>
          <i>
            <FaPinterestSquare
              className="mr-2.5 text-gray-600 cursor-pointer"
              size={20}
            />
          </i>
          <i>
            <FaInstagramSquare
              className="mr-2.5 text-gray-600 cursor-pointer"
              size={20}
            />
          </i>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
