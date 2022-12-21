function About() {
  return (
    <div className="h-[600px] w-full flex ">
      <div className="flex flex-col w-full">
        <div className="h-36 bg-gray-500 text-white flex flex-col items-center justify-center">
          <p>About Us</p>
          <p className="text-3xl">Learn About The Latest Technologies</p>
        </div>
        <div className="flex flex-col items-start ml-28 mt-10 w-3/4">
          <p className="text-3xl mb-3 font-bold">Our Agency Story</p>
          <p className="text-gray-500 mb-8">
            Check out our company story and work process
          </p>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <button className="px-7 py-5 bg-gray-400 rounded mt-5 text-white">
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
