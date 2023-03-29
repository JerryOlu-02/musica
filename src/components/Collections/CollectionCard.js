import AlbumShow from './AlbumShow';
import { useSelector } from 'react-redux';

const CollectionCard = function () {
  const collections = useSelector(({ collections }) => {
    return collections.data;
  });

  console.log(collections);

  // console.log(collections);
  const renderedCollections = collections.map((collection) => {
    return <AlbumShow key={collection.id} collection={collection} />;
  });

  return <div className="collection-list">{renderedCollections}</div>;
};

export default CollectionCard;
