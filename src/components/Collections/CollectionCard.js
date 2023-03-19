import PlayButton from '../../images/PlayButton.svg';
import { BsFillPlayFill } from 'react-icons/bs';

const CollectionCard = function ({ collection }) {
  return (
    <div className="collection-card">
      <img src={collection.image} alt="collection__image" />

      <div className="collection-card-div">
        <div>
          <h3>{collection.songName}</h3>
          <p>{collection.artist}</p>
          <p>{collection.likes}</p>
        </div>

        <div className="play-button">
          <BsFillPlayFill />
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
