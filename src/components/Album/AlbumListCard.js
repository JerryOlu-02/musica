import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const AlbumListCard = function ({ song }) {
  return (
    <div className="album-list-card">
      <div className="album-list-card-div">
        <img src={song.image} alt="albumlist__alt" />
        <AiOutlineHeart />
      </div>

      <div>
        <p>
          {song.name} ~ {song.artist}
        </p>

        <p>{song.albumName}</p>

        <p>{song.duration}</p>

        <p>
          {' '}
          <BiDotsVerticalRounded />
        </p>
      </div>
    </div>
  );
};

export default AlbumListCard;
