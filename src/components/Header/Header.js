import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import SearchBar from '../SearchBar/SearchBar';
import './header.scss';

const Header = function () {
  return (
    <div className="header">
      <div className="header-div">
        <NavLink to="/">
          <img className="logo-img" src={logo} alt="musica__logo" />
        </NavLink>
      </div>

      <SearchBar />
    </div>
  );
};

export default Header;
