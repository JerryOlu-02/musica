import Header from '../components/Header/Header';
import NavBar from '../components/SideBar/NavBar';
import MusicBar from '../components/MusicBar/MusicBar';
import Hero from '../components/Hero/Hero';
import NewReleases from '../components/NewReleases/NewReleases';
import Popular from '../components/Popular/Popular';

const HomePage = function () {
  return (
    <div className="app">
      <Header />

      <div className="main">
        <NavBar />
        <Hero />
      </div>

      <NewReleases />
      <Popular />
      <MusicBar />
    </div>
  );
};

export default HomePage;
