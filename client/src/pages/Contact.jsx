function Contact() {
  return (
    <div>
      {" "}
      <div className="h-[600px] w-full flex ">
        <div className="flex flex-col w-full">
          <div className="h-60  bg-gray-500 text-white flex flex-col items-center justify-center">
            <p>Contact Us</p>
            <p className="text-3xl text-center">
              Please get in touch and our expert support team will <br /> answer
              all your questions.
            </p>
          </div>
          <div className="flex flex-col items-start ml-28 mt-10 w-3/4">
            <form className="w-3/4 flex flex-col space-y-2">
              <label className="text-gray-500">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="border-2 h-10 placeholder:text-black pl-2"
              />
              <label className="text-gray-500">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="border-2 h-10 placeholder:text-black pl-2"
              />
              <label className="text-gray-500">Message</label>
              <textarea
                placeholder="Message"
                id=""
                cols="30"
                rows="10"
                className="border-2 h-36 placeholder:text-black pl-2 mb-2"
              ></textarea>
              <div className="flex justify-end">
                <button className="px-7 py-3 w-28 bg-gray-400 rounded mt-5 text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
