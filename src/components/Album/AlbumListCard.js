import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSongLike, removeSongLike } from '../../store';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { getMinutes } from '../../helpers/helpers';

const AlbumListCard = function ({ album }) {
  // console.log(album);
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState([]);

  const handleLike = function (nextIndex, song) {
    setIsLiked((currentLikeIndex) => {
      return currentLikeIndex.includes(nextIndex)
        ? isLiked.filter((like) => like !== nextIndex)
        : [...isLiked, nextIndex];
    });
  };

  const removeLike = function (song) {
    dispatch(removeSongLike(song.id));
  };

  const addLike = function (song) {
    dispatch(addSongLike(song));
  };

  const renderdSongs = album.tracks.items.map((track, index) => {
    const isCurrentlyLiked = isLiked.includes(index);

    return (
      <div key={track.id} className="album-list-card">
        <div className="album-list-card-div">
          <img src={album.images[0].url} alt="albumlist__alt" />
          <div onClick={() => handleLike(index, track)}>
            {isCurrentlyLiked ? (
              <AiFillHeart onClick={() => removeLike(track)} />
            ) : (
              <AiOutlineHeart onClick={() => addLike(track)} />
            )}
          </div>
        </div>

        <div>
          <p>
            {track.name} ~ {album.artists[0].name}
          </p>

          <p>{album.name}</p>

          <p>{getMinutes(track.duration_ms)}</p>

          <p>
            {' '}
            <BiDotsVerticalRounded />
          </p>
        </div>
      </div>
    );
  });

  return <div className="album-list">{renderdSongs}</div>;
};

export default AlbumListCard;
