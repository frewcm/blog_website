import { Link } from "react-router-dom";

function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="w-[300px] h-96 mt-10 mr-4 ml-4 ">
      {post.photo && (
        <img
          className="w-full h-1/2 rounded object-scale-down"
          src={PF + post.photo}
          alt="image of single post"
        />
      )}
      <div className="w-full flex flex-col items-center mt-8">
        <div>
          {post.catagories?.map((cat, index) => {
            return (
              <span className="text-gray-900 text-xs mr-2" key={index}>
                {cat.name}
              </span>
            );
          })}
        </div>
        <Link to={`/post/${post._id}`}>
          <span className="font-bold text-md mb-2 mt-2 hover:text-orange-400">
            {post.title}
          </span>
        </Link>
        <hr />
        <span className="text-gray-500 text-xs ">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="w-full text-sm text-gray-600 mt-3 line-clamp-3 leading-5">
        {post.desc}
      </p>
    </div>
  );
}

export default Post;
