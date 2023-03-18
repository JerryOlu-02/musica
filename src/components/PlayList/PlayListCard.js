import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const PlayListCard = function ({ song }) {
  return (
    <div>
      <div>
        <img src={song.image} />
        <AiFillHeart />
      </div>

      <p>
        {song.name} ~ {song.artist}
      </p>

      <p>{song.albumName}</p>

      <p>{song.duration}</p>

      <BiDotsVerticalRounded />
    </div>
  );
};

export default PlayListCard;
