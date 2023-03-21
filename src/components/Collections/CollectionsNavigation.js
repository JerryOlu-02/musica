import './Collections.scss';
import { NavLink } from 'react-router-dom';

const CollectionsNavigation = function ({ children }) {
  return (
    <div className="collection-list-container">
      <div className="collection-buttons">
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? 'collection-button-active' : null
          }
          end
        >
          My Collection
        </NavLink>
        <NavLink
          to="likes"
          className={({ isActive }) =>
            isActive ? 'collection-button-active' : null
          }
        >
          Likes
        </NavLink>
      </div>

      <>{children}</>
    </div>
  );
};

export default CollectionsNavigation;
