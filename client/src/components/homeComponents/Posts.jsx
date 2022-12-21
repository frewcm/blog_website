import Post from "../postComponents/Post";

function Posts({ posts }) {
  return (
    <div className="w-full flex flex-wrap pl-3 pr-3 mt-5 mb-5">
      <div className="flex justify-center w-full mt-8">
        <p className="text-3xl">Most Popular</p>
      </div>

      {posts?.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </div>
  );
}

export default Posts;
