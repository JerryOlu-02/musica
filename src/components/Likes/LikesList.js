import { useSelector } from 'react-redux';

const LikesList = function () {
  const likes = useSelector(({ like: { songs, collections } }) => {
    return [songs.flat(), collections.flat()];
  });

  const likesArr = likes.flat();

  likes.map((like) => {});

  return <div className="collection-list">{}</div>;
};

export default LikesList;
