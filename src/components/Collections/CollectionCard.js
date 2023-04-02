import AlbumShow from './AlbumShow';

const CollectionCard = function ({ collections, extraCollections }) {
  // console.log(collections);
  const renderedCollections = collections.map((collection) => {
    return <AlbumShow key={collection.id} collection={collection} />;
  });

  const renderedExtraCollections = extraCollections.map((collection) => {
    return <AlbumShow key={collection.id} collection={collection} />;
  });

  return (
    <div className="collection-list">
      {renderedCollections}
      {renderedExtraCollections}
    </div>
  );
};

export default CollectionCard;
