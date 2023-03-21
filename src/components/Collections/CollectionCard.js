import { BsFillPlayFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CollectionCard = function ({ collections }) {
  console.log(collections);
  const renderedCollections = collections.map((collection) => {
    return (
      <div key={collection.id} className="collection-card">
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
  });

  return <>{renderedCollections}</>;
};

export default CollectionCard;
