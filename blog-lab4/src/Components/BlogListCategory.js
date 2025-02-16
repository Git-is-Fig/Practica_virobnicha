import { Link } from "react-router-dom";
import "./BlogListCategory.css";

const BlogList = ({ posts }) => {
  return (
    <div className="blog-list-Category">
      {posts.map((post) => (
        <div key={post.id} className="blog-card-Category">
          <Link to={`/post/${post.id}`}>
            <img src={post.image} alt={post.title} className="blog-image-Category" />
          </Link>
          <div className="blog-content-Category">
            <span className="blog-category-Category">{post.category}</span>
            <h2 className="blog-title-Category">
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="blog-description-Category">{post.description}</p>
            <div className="blog-footer-Category">
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