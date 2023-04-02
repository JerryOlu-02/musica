import { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addCollectionLike, removeCollectionLike } from '../../store';
import { Link } from 'react-router-dom';

const ChartShow = function ({ chart }) {
  const dispatch = useDispatch();

  const [isLiked, setIsLiked] = useState(false);

  const handleLike = function () {
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    if (isLiked) {
      dispatch(addCollectionLike(chart));
    } else {
      dispatch(removeCollectionLike(chart));
    }
  }, [isLiked, dispatch, chart]);

  return (
    <div className="chart-show-item">
      <Link to={`/album/${chart.id}`} className="cart-show-item-div">
        <img src={chart.images[0].url} alt="Chart__image" />
        <div>
          <p>{chart.name}</p>
          <p>{chart.artists[0].name}</p>
          <p>{chart.release_date}</p>
        </div>
      </Link>

      <div onClick={handleLike} className="chart-like">
        {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
      </div>
    </div>
  );
};

export default ChartShow;
