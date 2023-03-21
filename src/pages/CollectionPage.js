import Header from '../components/Header/Header';
import NavBar from '../components/SideBar/NavBar';
import MusicBar from '../components/MusicBar/MusicBar';
import { Outlet } from 'react-router-dom';
import CollectionsNavigation from '../components/Collections/CollectionsNavigation';

const CollectionPage = function () {
  return (
    <div className="app">
      <Header />

      <div className="main">
        <NavBar />
        <CollectionsNavigation>
          <Outlet />
        </CollectionsNavigation>
      </div>

      <MusicBar />
    </div>
  );
};

export default CollectionPage;
