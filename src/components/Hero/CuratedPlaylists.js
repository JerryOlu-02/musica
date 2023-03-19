import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const CuratedPlaylists = function () {
  return (
    <div className="curated-playlists">
      <p>Curated playlist</p>

      <div className="curated-playlists-div">
        <div className="curated-playlists-div-1">
          <h2>R & B Hits</h2>

          <p>
            All mine, Lie again, Petty call me everyday, Out of time, No love,
            Bad habit, and so much more
          </p>
        </div>

        <div className="curated-playlists-div-2">
          <div></div>
          <AiFillHeart />
          <p>33K Likes</p>
        </div>
      </div>
    </div>
  );
};

export default CuratedPlaylists;
