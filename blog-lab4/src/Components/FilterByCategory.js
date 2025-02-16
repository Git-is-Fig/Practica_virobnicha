import "./FilterByCategory.css";

const FilterByCategory = ({ selectedCategory, onCategoryChange }) => {
  const categories = ["All", "Design", "Business", "Software Engineering", "Technology", "Newsletter", "Management"];

  return (
    <div className="filter-container">
      <p className="filter-title">Blog categories</p>
      <ul className="filter-list">
        {categories.map((category) => (
          <li
            key={category}
            className={`filter-item ${selectedCategory === category ? "active" : ""}`}
            onClick={() => onCategoryChange(category)}
          >
            {category === "All" ? "View all" : category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterByCategory;
