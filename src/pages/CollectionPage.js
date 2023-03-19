import Header from '../components/Header/Header';
import NavBar from '../components/SideBar/NavBar';
import MusicBar from '../components/MusicBar/MusicBar';
import CollectionList from '../components/Collections/CollectionList';

const CollectionPage = function () {
  return (
    <div className="app">
      <Header />

      <div className="main">
        <NavBar />
        <CollectionList />
      </div>

      <MusicBar />
    </div>
  );
};

export default CollectionPage;
