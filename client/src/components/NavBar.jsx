import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaPinterestSquare, FaInstagramSquare } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import {
  tokenAtom,
  userIdAtom,
  userImageAtom,
  usernameAtom,
} from "../pages/Login";
import { useAtom } from "jotai";

function NavBar() {
  const [token, setToken] = useAtom(tokenAtom);
  const [profilePicture, setProfilePicture] = useAtom(userImageAtom);
  const [id, setId] = useAtom(userIdAtom);
  const [username, setUsername] = useAtom(usernameAtom);
  const navigate = useNavigate();

  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setToken(null);
    setUsername(null);
    setProfilePicture(null);
    setId(null);
    navigate("/login");
  };

  return (
    <div className="w-full h-12 bg-white font-memo z-40 sticky top-0 flex items-center">
      <div className="w-1/4  flex justify-center">
        <AiFillFacebook
          className="mr-2.5 text-gray-600 cursor-pointer"
          size={20}
        />

        <AiFillTwitterSquare
          className="mr-2.5 text-gray-600 cursor-pointer"
          size={20}
        />

        <FaPinterestSquare
          className="mr-2.5 text-gray-600 cursor-pointer"
          size={20}
        />

        <FaInstagramSquare
          className="mr-2.5 text-gray-600 cursor-pointer"
          size={20}
        />
      </div>
      <div className="w-1/2">
        <ul className="flex items-center justify-center text-gray-400">
          <Link to="/" className="mr-5 cursor-pointer hover:text-orange-300">
            HOME
          </Link>
          <Link
            to="/write"
            className="mr-5 cursor-pointer hover:text-orange-300"
          >
            WRITE
          </Link>
          <Link
            to="/about"
            className="mr-5 cursor-pointer hover:text-orange-300"
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className="mr-5 cursor-pointer hover:text-orange-300"
          >
            CONTACT
          </Link>
          {token ? (
            <button
              onClick={handleLogout}
              className="mr-5 cursor-pointer hover:text-orange-300"
            >
              LOGOUT
            </button>
          ) : null}
        </ul>
      </div>
      <div className="w-1/4  flex items-center justify-center">
        <Link to="/setting">
          {token !== null ? (
            <div className="flex items-center">
              <img
                className="w-10 rounded-full mr-4 cursor-pointer border-2"
                src={profilePicture ? PF + profilePicture : "/noavatar-2.jpg"}
                alt=""
              />
              <BsSearch className="text-gray-600 cursor-pointer" />
            </div>
          ) : (
            <div className="flex text-gray-500 mr-4 ">
              <Link to="/login" className="mr-2">
                LOGIN
              </Link>
              <Link to="/register">REGISTER</Link>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
