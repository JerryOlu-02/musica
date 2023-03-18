import ChartShow from './ChartShow';
import Image from '../../images/Rectangle 14 (2).png';

const ChartList = function () {
  const charts = [
    {
      img: Image,
      artist: 'Sean swadder',
      name: 'Golden age of 80s',
      time: '2:34:45',
    },
    {
      img: Image,
      artist: 'DJ YK Mule',
      name: 'Raggae "n" Blues',
      time: '2:34:45',
    },
    {
      img: Image,
      artist: 'Sean swadder',
      name: 'Golden age of 80s',
      time: '2:34:45',
    },
  ];

  const renderedCharts = charts.map((chart, index) => (
    <ChartShow key={index} chart={chart} />
  ));

  return (
    <div className="chart-list">
      <h3>Top charts</h3>

      <div className="chart-show">{renderedCharts}</div>
    </div>
  );
};

export default ChartList;
