import { Link } from 'react-router-dom';
import { BsFillPlayFill } from 'react-icons/bs';

const AlbumShow = function ({ collection }) {
  return (
    <div className="collection-card">
      <Link to={`/album/${collection.id}`}>
        <img src={collection.images[0].url} alt="collection__image" />
      </Link>

      <div className="collection-card-div">
        <div>
          <h3>{collection.name}</h3>
          <p>{collection.artists[0].name}</p>
          {/* <p>{Math.round(collection.duration_ms / 60000)} Minutes</p> */}
        </div>

        <div className="play-button">
          <BsFillPlayFill />
        </div>
      </div>
    </div>
  );
};

export default AlbumShow;
