import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div className="w-full lg:h-64 bg-gray-100 pb-10 flex flex-col items-center">
      <div className="w-full h-full grid grid-cols-1 space-y-5 lg:grid lg:grid-cols-2 gap-1 py-5 px-10">
        <div className="w-full lg:w-3/4 flex flex-col items-center lg:items-start">
          <p className="text-gray-500 text-2xl font-bold mb-5">Blog Website</p>
          <p className="text-gray-500 text-center lg:text-start lg:w-full md:w-1/2">
            Where you find diffrent writings and learning material about the
            latest web development technologies,Please get in touch and our
            expert support team will answer all your questions.
          </p>
        </div>
        <div className="w-full h-full flex flex-col items-center lg:items-end">
          <p className="text-2xl font-bold text-gray-500 text-start mb-5">
            Contact Us
          </p>
          <div className="flex space-x-3">
            <BsLinkedin className="text-gray-500" size={25} />
            <BsTwitter className="text-gray-500" size={25} />
            <AiFillFacebook className="text-gray-500" size={25} />
            <AiFillInstagram className="text-gray-500" size={25} />
          </div>
        </div>
      </div>
      <hr className="w-11/12 text-black" />

      <div className="flex text-xs mt-10 space-x-1">
        <p className="text-gray-500">
          &copy; copyright {new Date().getFullYear()}. Made by
        </p>
        <p className="text-gray-500 underline">Frew Befekadu</p>
      </div>
    </div>
  );
}

export default Footer;
