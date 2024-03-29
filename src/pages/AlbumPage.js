import Header from '../components/Header/Header';
import NavBar from '../components/SideBar/NavBar';
import MusicBar from '../components/MusicBar/MusicBar';
import AlbumList from '../components/Album/AlbumList';

const AlbumPage = function () {
  return (
    <div className="app">
      <Header />
      <div className="background-album-image"></div>

      <div className="main">
        <NavBar />
        <AlbumList />
      </div>

      <MusicBar />
    </div>
  );
};

export default AlbumPage;
