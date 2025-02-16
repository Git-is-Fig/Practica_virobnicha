import "./SerachCategoryBar.css";

const SearchCategoryBar = ({ onSearch }) => {
  return (
    <div className="searchCategory-wrapper">
      <div className="searchCategory-container">
        <svg
          className="searchCategory-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => onSearch(e.target.value)}
          className="searchCategory-bar"
        />
      </div>
    </div>
  );
};

export default SearchCategoryBar;