import ChartShow from './ChartShow';
import { useFetchChartQuery } from '../../store';

const ChartList = function () {
  const chartsIds = [
    '0lzPMIAYhhUSD2BPT0VQWI',
    '71S4BwV5E6Pwwz0ASZB7th',
    '79ONNoS4M9tfIA1mYLBYVX',
  ];

  const { data, isFetching, isError } = useFetchChartQuery(chartsIds);

  let content;

  if (isFetching) {
    return;
  } else if (isError) {
    return;
  } else {
    // console.log(data.albums);
    content = data.map((chart) => <ChartShow key={chart.id} chart={chart} />);
  }

  return (
    <div className="chart-list">
      <h3>Top charts</h3>

      <div className="chart-show">{content}</div>
    </div>
  );
};

export default ChartList;
