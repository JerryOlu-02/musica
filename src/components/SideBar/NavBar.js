import './navBar.scss';
import { ReactComponent as Home } from '../../images/Home.svg';
import { ReactComponent as PlayList } from '../../images/playlist.svg';
import { ReactComponent as Radio } from '../../images/radio.svg';
import { ReactComponent as Videos } from '../../images/videos.svg';
import { ReactComponent as Profile } from '../../images/profile.svg';
import { ReactComponent as Logout } from '../../images/Logout.svg';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useState } from 'react';

const NavBar = function () {
  const [navBarActive, setNavBarActive] = useState(false);

  const showNavbar = function () {
    setNavBarActive(true);
  };

  const hideNavbar = function () {
    setNavBarActive(false);
  };

  const navShowClass = classNames('navbar-items', {
    'navbar-items-active': navBarActive,
  });

  return (
    <div className="navbar">
      <div onClick={showNavbar} className="menu-bar">
        <div></div>
        <div></div>
      </div>

      <div onClick={hideNavbar} className={navShowClass}>
        <div className="navbar-div">
          <NavLink
            className={({ isActive }) => (isActive ? 'navlink-active' : '')}
            to="/"
            end
          >
            <Home />
            <p>Home</p>
          </NavLink>

          <NavLink
            to="/collections"
            className={({ isActive }) => (isActive ? 'navlink-active' : '')}
          >
            <PlayList />
            <p>My collections</p>
          </NavLink>

          <NavLink
            to="/radio"
            className={({ isActive }) => (isActive ? 'navlink-active' : '')}
          >
            <Radio />
            <p>Radio</p>
          </NavLink>

          <NavLink
            to="videos"
            className={({ isActive }) => (isActive ? 'navlink-active' : '')}
          >
            <Videos />
            <p>Music videos</p>
          </NavLink>
        </div>

        <div className="navbar-div">
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? 'navlink-active' : '')}
          >
            <Profile />
            <p>Profile</p>
          </NavLink>

          <NavLink
            to="/logout"
            className={({ isActive }) => (isActive ? 'navlink-active' : '')}
          >
            <Logout />
            <p>Log out</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
