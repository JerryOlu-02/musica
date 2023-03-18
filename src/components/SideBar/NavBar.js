import './navBar.scss';
import Home from '../../images/Home.svg';
import playlist from '../../images/playlist.svg';
import radio from '../../images/radio.svg';
import videos from '../../images/videos.svg';
import profile from '../../images/profile.svg';
import logout from '../../images/Logout.svg';
import { NavLink } from 'react-router-dom';
import { useMatch } from 'react-router-dom';
import classNames from 'classnames';
import { useState } from 'react';

const NavBar = function () {
  const [navBarActive, setNavBarActive] = useState(false);

  const match = useMatch('/');

  const activeClass = classNames({
    'navbar-active': Boolean(match),
  });

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
          <NavLink className={activeClass} to="/">
            <img src={Home} alt="home__img" />
            <p>Home</p>
          </NavLink>

          <NavLink>
            <img src={playlist} alt="playlist__img" />
            <p>My collections</p>
          </NavLink>

          <NavLink>
            <img src={radio} alt="radio__img" />
            <p>Radio</p>
          </NavLink>

          <NavLink>
            <img src={videos} alt="logout__img" />
            <p>Music videos</p>
          </NavLink>
        </div>

        <div className="navbar-div">
          <NavLink>
            <img src={profile} alt="profile__logo" />
            <p>Profile</p>
          </NavLink>

          <NavLink>
            <img src={logout} alt="logout__logo" />
            <p>Log out</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
