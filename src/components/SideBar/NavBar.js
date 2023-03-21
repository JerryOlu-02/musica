import './navBar.scss';
import Home from '../../images/Home.svg';
import playlist from '../../images/playlist.svg';
import radio from '../../images/radio.svg';
import videos from '../../images/videos.svg';
import profile from '../../images/profile.svg';
import logout from '../../images/Logout.svg';
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
            className={({ isActive }) => (isActive ? 'navlink-active' : null)}
            to="/"
            end
          >
            <img src={Home} alt="home__img" />
            <p>Home</p>
          </NavLink>

          <NavLink
            to="/collections"
            className={({ isActive }) => (isActive ? 'navlink-active' : null)}
          >
            <img src={playlist} alt="playlist__img" />
            <p>My collections</p>
          </NavLink>

          <NavLink
            to="/radio"
            className={({ isActive }) => (isActive ? 'navlink-active' : null)}
          >
            <img src={radio} alt="radio__img" />
            <p>Radio</p>
          </NavLink>

          <NavLink
            to="videos"
            className={({ isActive }) => (isActive ? 'navlink-active' : null)}
          >
            <img src={videos} alt="logout__img" />
            <p>Music videos</p>
          </NavLink>
        </div>

        <div className="navbar-div">
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? 'navlink-active' : null)}
          >
            <img src={profile} alt="profile__logo" />
            <p>Profile</p>
          </NavLink>

          <NavLink
            to="/logout"
            className={({ isActive }) => (isActive ? 'navlink-active' : null)}
          >
            <img src={logout} alt="logout__logo" />
            <p>Log out</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
