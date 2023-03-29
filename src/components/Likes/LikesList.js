import '../Collections/Collections.scss';
import { useSelector } from 'react-redux';
import AlbumShow from '../Collections/AlbumShow';
import LikesCard from './LikesCard';

const LikesList = function () {
  const likes = useSelector(({ like: { songs, collections } }) => {
    return [songs.flat(), collections.flat()];
  });

  const likesArr = likes.flat();

  let content;

  if (likesArr.length === 0) {
    content = (
      <h3 style={{ color: '#efeee0', fontWeight: '100' }}>
        You have no liked Track or Album
      </h3>
    );
  } else {
    const renderedLikes = likesArr
      .filter((albumTrackObject) => {
        return albumTrackObject.type === 'track';
      })
      .map((track) => {
        return <LikesCard key={track.id} track={track} />;
      });

    const renderdAlbums = likesArr
      .filter((albumTrackObject) => {
        return albumTrackObject.type === 'album';
      })
      .map((album) => {
        return <AlbumShow key={album.id} collection={album} />;
      });

    content = (
      <>
        {renderdAlbums}
        {renderedLikes}
      </>
    );
  }

  return <div className="collection-list">{content}</div>;
};

export default LikesList;
