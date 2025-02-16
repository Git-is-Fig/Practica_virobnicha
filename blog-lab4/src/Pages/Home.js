import { useEffect, useState } from "react";
import BlogList from "../Components/BlogList";
import SearchBar from "../Components/SearchBar";
import SortMenu from "../Components/SortMenu";
import Pagination from "../Components/Pagination";
import postsData from "../posts.json";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  useEffect(() => {
    let filteredPosts = postsData.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortOrder === "newest") {
      filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOrder === "oldest") {
      filteredPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortOrder === "az") {
      filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "za") {
      filteredPosts.sort((a, b) => b.title.localeCompare(a.title));
    }

    setPosts(filteredPosts);
    setCurrentPage(1);
  }, [searchQuery, sortOrder]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div>
      <p className="po">Our Blog</p>
      <h1 className="ForSearch">The latest writing from our team</h1>
      <p className="ForSearch2">The latest industry news, interviews, technologies, and resources.</p>
      <SearchBar onSearch={setSearchQuery} />
      <SortMenu onSort={setSortOrder} />
      <BlogList posts={currentPosts} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default Home;