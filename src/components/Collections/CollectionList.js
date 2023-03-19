import './Collections.scss';
import CollectionImage from '../../images/Rectangle 14 (5).png';
import CollectionCard from './CollectionCard';

const CollectionList = function () {
  const collections = [
    {
      songName: 'Limits',
      image: CollectionImage,
      artist: 'John Watts',
      likes: '24m Likes',
    },
    {
      songName: 'Limits',
      image: CollectionImage,
      artist: 'John Watts',
      likes: '24m Likes',
    },
    {
      songName: 'Limits',
      image: CollectionImage,
      artist: 'John Watts',
      likes: '24m Likes',
    },
    {
      songName: 'Limits',
      image: CollectionImage,
      artist: 'John Watts',
      likes: '24m Likes',
    },
  ];

  const renderedCollection = collections.map((collection, index) => {
    return <CollectionCard collection={collection} key={index} />;
  });

  return (
    <div className="collection-list-container">
      <div className="collection-buttons">
        <button>My Collection</button>
        <button>Likes</button>
      </div>

      <div className="collection-list">{renderedCollection}</div>
    </div>
  );
};

export default CollectionList;
