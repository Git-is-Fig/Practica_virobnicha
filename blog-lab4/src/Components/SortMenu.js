import "./SortMenu.css";

const SortMenu = ({ onSort }) => {
    return (
      <div className="sort-container">
        <select onChange={(e) => onSort(e.target.value)} className="sort-menu">
            <option value="newest">Sort by Date (Newest)</option>
            <option value="oldest">Sort by Date (Oldest)</option>
            <option value="az">Sort A-Z</option>
            <option value="za">Sort Z-A</option>
        </select>
      </div>
    );
  };
  
export default SortMenu;  
