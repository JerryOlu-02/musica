import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const PlayListCard = function ({ song }) {
  return (
    <div className="play-list-card">
      <div className="play-list-card-div">
        <img src={song.image} alt="Playlist__alt" />
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

export default PlayListCard;
