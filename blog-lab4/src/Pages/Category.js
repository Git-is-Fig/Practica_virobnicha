import { useEffect, useState } from "react";
import BlogList from "../Components/BlogListCategory";
import SearchBar from "../Components/SearchCategoryBar";
import FilterByCategory from "../Components/FilterByCategory";
import Pagination from "../Components/Pagination";
import postsData from "../posts.json";
import "./Category.css";

const Category = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;


  useEffect(() => {
    let filteredPosts = postsData.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (selectedCategory !== "All") {
      filteredPosts = filteredPosts.filter(post => post.category === selectedCategory);
    }

    setPosts(filteredPosts);
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="flex max-w-6xl mx-auto p-6">
      <div className="w-3/4">
        <p className="poCategory">Our Blog</p>
        <h1 className="ForSearchCategory">Resources and Insights</h1>
        <p className="ForSearchCategory2">The latest industry news, interviews, technologies, and resources.</p>
        <SearchBar onSearch={setSearchQuery} />
        <aside className="w-1/4 pr-6">
          <FilterByCategory selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          <BlogList posts={currentPosts} />
        </aside>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
};

export default Category;
