import './Collections.scss';
import CollectionCard from './CollectionCard';
import { useFetchChartQuery } from '../../store';

const CollectionList = function () {
  const collectionsId = [
    '7txGsnDSqVMoRl6RQ9XyZP',
    '4aW4iDepQUl5ZCHd1Gli68',
    '2BeECcZnwLsaYOndRSO9fF',
    '7tsXPtLqhab1zWeubbf6JH',
  ];

  const { data, isFetching, isError } = useFetchChartQuery(collectionsId);

  let content;

  if (isFetching) {
    return;
  } else if (isError) {
    return;
  } else {
    content = <CollectionCard collections={data.albums} />;
  }

  return <div className="collection-list">{content}</div>;
};

export default CollectionList;
