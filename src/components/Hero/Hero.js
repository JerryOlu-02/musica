import ChartList from './ChartList';
import CuratedPlaylists from './CuratedPlaylists';
import './Hero.scss';

const Hero = function () {
  return (
    <div className="hero">
      <CuratedPlaylists />
      <ChartList />
    </div>
  );
};

export default Hero;
