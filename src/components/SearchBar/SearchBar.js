import { FiSearch } from 'react-icons/fi';
import './searchBar.scss';

const SearchBar = function () {
  return (
    <div className="searchbar">
      <FiSearch className="search-icon" />
      <input type="text" placeholder="Search artists" />
    </div>
  );
};

export default SearchBar;
