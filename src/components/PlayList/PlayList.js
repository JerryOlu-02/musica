import PlayListImage from '../../images/Lead-image.svg';
import SongImage from '../../images/Rectangle 14 (1).png';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './PlayListCard.scss';
import './PlayList.scss';
import PlayListCard from './PlayListCard';
import CollectionImage from '../../images/collection.svg';
import PlayAllImage from '../../images/playall.svg';

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
    <div className="play-list-container">
      <div className="play-list-container-div">
        <img src={playList.image} alt="playlist__image_alt" />

        <div className="play-list-container-content">
          <div>
            <h3>{playList.name}</h3>
            <p>{playList.description}</p>
            <p>
              {playList.songTime} ~ {playList.songsNo}
            </p>
          </div>

          <div>
            <button>
              <img src={PlayAllImage} alt="Playall__icon" />
              Play All
            </button>
            <button>
              <img src={CollectionImage} alt="collection_icon" />
              Add to collection
            </button>
            <button className="like-btn">
              <AiFillHeart />
              <p>Like</p>
            </button>
          </div>
        </div>
      </div>

      <div className="play-list">{renderedSongs}</div>
    </div>
  );
};

export default PlayList;
