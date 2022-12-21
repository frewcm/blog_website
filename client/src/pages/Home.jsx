import Header from "../components/homeComponents/Header";
import Posts from "../components/homeComponents/Posts";
import SideBar from "../components/homeComponents/SideBar";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import ClipLoader from "react-spinners/ClipLoader";

function Home() {
  const location = useLocation();
  const path = location.search;
  const { data: posts } = useQuery(["all_posts"], async () => {
    const response = await axios.get("/api/posts/" + path);
    return response.data;
  });

  return (
    <>
      <Header />
      <div className="flex">
        <Posts posts={posts} />
        <SideBar />
      </div>
      <Footer />
    </>
  );
}

export default Home;
