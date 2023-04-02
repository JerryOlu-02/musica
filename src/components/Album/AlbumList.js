import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './AlbumListCard.scss';
import './AlbumList.scss';
import AlbumListCard from './AlbumListCard';
import CollectionImage from '../../images/collection.svg';
import PlayAllImage from '../../images/playall.svg';
import { useParams } from 'react-router-dom';
import { useFetchChartQuery } from '../../store';
import { useDispatch } from 'react-redux';
import {
  addCollection,
  removeCollection,
  addCollectionLike,
  removeCollectionLike,
} from '../../store';
import { useState } from 'react';

const AlbumList = function () {
  const params = useParams();
  const { data, isFetching, isError } = useFetchChartQuery([params.albumId]);
  const dispatch = useDispatch();

  const [added, setAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleIsAdded = function () {
    setAdded(!added);
  };

  const handleLike = function () {
    setIsLiked(!isLiked);
  };

  let content;
  let albumData;

  const removeFromCollection = function () {
    dispatch(removeCollection(albumData));
  };

  const addToCollection = function () {
    dispatch(addCollection(albumData));
  };

  const removeLike = function () {
    dispatch(removeCollectionLike(albumData));
  };

  const addLike = function () {
    dispatch(addCollectionLike(albumData));
  };

  if (isFetching) {
    return;
  } else if (isError) {
    return;
  } else {
    albumData = data[0];

    return (
      <div className="album-list-container">
        <div className="album-list-container-div">
          <img src={albumData.images[0].url} alt="albumlist__image_alt" />

          <div className="album-list-container-content">
            <div>
              <h3>{albumData.name}</h3>

              <p>{albumData.label}</p>

              <p>
                {albumData.total_tracks} songs ~ {albumData.release_date}
              </p>
            </div>

            <div>
              <button>
                <img src={PlayAllImage} alt="Playall__icon" />
                Play All
              </button>

              <div onClick={handleIsAdded}>
                {added ? (
                  <button onClick={() => removeFromCollection()}>
                    <img src={CollectionImage} alt="collection_icon" />
                    Remove From Collection
                  </button>
                ) : (
                  <button onClick={() => addToCollection()}>
                    <img src={CollectionImage} alt="collection_icon" />
                    Add To Collection
                  </button>
                )}
              </div>

              <div onClick={handleLike}>
                {isLiked ? (
                  <button onClick={() => removeLike()} className="like-btn">
                    <AiFillHeart />
                    <p>Remove Like</p>
                  </button>
                ) : (
                  <button onClick={() => addLike()} className="like-btn">
                    <AiOutlineHeart />
                    <p>Like</p>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <AlbumListCard album={albumData} />
      </div>
    );
  }
};

export default AlbumList;
