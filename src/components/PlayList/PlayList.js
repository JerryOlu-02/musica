import PlayListImage from '../../images/Lead-image.svg';
import SongImage from '../../images/Rectangle 14 (1).png';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import PlayListCard from './PlayListCard';

const PlayList = function () {
  const playList = {
    image: PlayListImage,
    name: `Tommorow's Tunes`,
    description:
      'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
    songsNo: '64 Songs',
    songTime: '16hrs+',
    songs: [
      {
        image: SongImage,
        name: 'Let me love you',
        artist: 'Burna',
        albumName: 'African Giant',
        duration: '4:17',
      },
      {
        image: SongImage,
        name: 'Let me love you',
        artist: 'Burna',
        albumName: 'African Giant',
        duration: '4:17',
      },
      {
        image: SongImage,
        name: 'Let me love you',
        artist: 'Burna',
        albumName: 'African Giant',
        duration: '4:17',
      },
      {
        image: SongImage,
        name: 'Let me love you',
        artist: 'Burna',
        albumName: 'African Giant',
        duration: '4:17',
      },
      {
        image: SongImage,
        name: 'Let me love you',
        artist: 'Burna',
        albumName: 'African Giant',
        duration: '4:17',
      },
      {
        image: SongImage,
        name: 'Let me love you',
        artist: 'Burna',
        albumName: 'African Giant',
        duration: '4:17',
      },
      {
        image: SongImage,
        name: 'Let me love you',
        artist: 'Burna',
        albumName: 'African Giant',
        duration: '4:17',
      },
      {
        image: SongImage,
        name: 'Let me love you',
        artist: 'Burna',
        albumName: 'African Giant',
        duration: '4:17',
      },
      {
        image: SongImage,
        name: 'Let me love you',
        artist: 'Burna',
        albumName: 'African Giant',
        duration: '4:17',
      },
      {
        image: SongImage,
        name: 'Let me love you',
        artist: 'Burna',
        albumName: 'African Giant',
        duration: '4:17',
      },
      {
        image: SongImage,
        name: 'Let me love you',
        artist: 'Burna',
        albumName: 'African Giant',
        duration: '4:17',
      },
    ],
  };

  const renderedSongs = playList.songs.map((song, index) => {
    return <PlayListCard key={index} song={song} />;
  });

  return (
    <div>
      <div>
        <img src={playList.image} alt="playlist__image_alt" />

        <div>
          <div>
            <h3>{playList.name}</h3>
            <p>{playList.description}</p>
            <p>
              {playList.songTime} ~ {playList.songsNo}
            </p>
          </div>

          <div>
            <button>Play All</button>
            <button>Add to collection</button>
            <button>
              <AiFillHeart />
            </button>
          </div>
        </div>
      </div>

      <div>{renderedSongs}</div>
    </div>
  );
};

export default PlayList;
