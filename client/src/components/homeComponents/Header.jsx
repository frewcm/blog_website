function Header() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center text-gray-500 absolute left-0 right-0 top-[65px]">
        <span className="text-md">Web Technlogy</span>
        <span className="text-7xl font-light">Blogs.</span>
      </div>
      <img
        className="w-full h-[450px] mt-20 object-cover"
        src="https://cdn.ucberkeleybootcamp.com/wp-content/uploads/sites/106/2020/03/Web-Developer-Bootcamp-San-Francisco.jpeg"
      />
    </div>
  );
}

export default Header;
