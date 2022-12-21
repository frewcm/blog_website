import SideBar from "../components/homeComponents/SideBar";
import SinglePost from "../components/singlepostComponens/SinglePost";

function PostPage() {
  return (
    <div className="flex">
      <SinglePost />
      <SideBar />
    </div>
  );
}

export default PostPage;
