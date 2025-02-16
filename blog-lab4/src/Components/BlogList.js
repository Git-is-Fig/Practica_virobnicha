import { Link } from "react-router-dom";
import "./BlogList.css";

const BlogList = ({ posts }) => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <div key={post.id} className="blog-card">
          <Link to={`/post/${post.id}`}>
            <img src={post.image} alt={post.title} className="blog-image" />
          </Link>
          <div className="blog-content">
            <span className="blog-category">{post.category}</span>
            <h2 className="blog-title">
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="blog-description">{post.description}</p>
            <div className="blog-footer">
              <span className="author">{post.author}</span>
              <span className="date">{post.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;