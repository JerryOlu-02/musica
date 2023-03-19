import PlayListImage from '../../images/Lead-image.svg';
import SongImage from '../../images/Rectangle 14 (1).png';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './AlbumListCard.scss';
import './AlbumList.scss';
import AlbumListCard from './AlbumListCard';
import CollectionImage from '../../images/collection.svg';
import PlayAllImage from '../../images/playall.svg';

const AlbumList = function () {
  const albumList = {
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

  const renderedSongs = albumList.songs.map((song, index) => {
    return <AlbumListCard key={index} song={song} />;
  });

  return (
    <div className="album-list-container">
      <div className="album-list-container-div">
        <img src={albumList.image} alt="albumlist__image_alt" />

        <div className="album-list-container-content">
          <div>
            <h3>{albumList.name}</h3>
            <p>{albumList.description}</p>
            <p>
              {albumList.songTime} ~ {albumList.songsNo}
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

      <div className="album-list">{renderedSongs}</div>
    </div>
  );
};

export default AlbumList;
