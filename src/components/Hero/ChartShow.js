import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const ChartShow = function ({ chart }) {
  return (
    <div className="chart-show-item">
      <div className="cart-show-item-div">
        <img src={chart.img} alt="Chart__image" />
        <div>
          <p>{chart.name}</p>
          <p>{chart.artist}</p>
          <p>{chart.time}</p>
        </div>
      </div>

      <div className="chart-like">
        <AiOutlineHeart />
      </div>
    </div>
  );
};

export default ChartShow;
