import { BsFillPlayFill } from 'react-icons/bs';
import { getMinutes } from '../../helpers/helpers';

const LikesCard = function ({ track }) {
  return (
    <div className="collection-card">
      <div>
        {/* <img src={track.images[0].url} alt="collection__image" /> */}
      </div>

      <div className="collection-card-div">
        <div>
          <h3>{track.name}</h3>
          <p>{track.artists[0].name}</p>
          <p>{getMinutes(track.duration_ms)}</p>
        </div>

        <div className="play-button">
          <BsFillPlayFill />
        </div>
      </div>
    </div>
  );
};

export default LikesCard;
