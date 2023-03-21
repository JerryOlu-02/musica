import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSongLike, removeSongLike } from '../../store';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const AlbumListCard = function ({ album }) {
  // console.log(album);
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState([]);

  const state = useSelector(({ like }) => {
    return like;
  });

  console.log(state);

  const handleLike = function (nextIndex, song) {
    setIsLiked((currentLikeIndex) => {
      return currentLikeIndex.includes(nextIndex)
        ? isLiked.filter((like) => like !== nextIndex)
        : [...isLiked, nextIndex];
    });

    // NOT YET DONE!!!
    // FIND METHO TO REMOVE SONG
    dispatch(addSongLike(song));
  };

  const renderdSongs = album.tracks.items.map((track, index) => {
    const isCurrentlyLiked = isLiked.includes(index);

    return (
      <div key={track.id} className="album-list-card">
        <div className="album-list-card-div">
          <img src={album.images[0].url} alt="albumlist__alt" />
          <div onClick={() => handleLike(index, track)}>
            {isCurrentlyLiked ? <AiFillHeart /> : <AiOutlineHeart />}
          </div>
        </div>

        <div>
          <p>
            {track.name} ~ {album.artists[0].name}
          </p>

          <p>{album.name}</p>

          <p>
            {Math.round(track.duration_ms / 60000)} :{' '}
            {Math.round(track.duration_ms / 1000) % 60 < 10
              ? `0${Math.round((track.duration_ms / 1000) % 60)}`
              : Math.round(track.duration_ms / 1000) % 60}
          </p>

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
