import './Collections.scss';
import CollectionCard from './CollectionCard';
import { useFetchChartQuery } from '../../store/apis/chartsApi';
import { useSelector } from 'react-redux';

const CollectionList = function () {
  const collectionsId = [
    '7txGsnDSqVMoRl6RQ9XyZP',
    '4aW4iDepQUl5ZCHd1Gli68',
    '2BeECcZnwLsaYOndRSO9fF',
    '7tsXPtLqhab1zWeubbf6JH',
  ];

  const collectionData = useSelector(({ collections: { data } }) => {
    return data;
  });

  // console.log(collectionData);

  const { data, isFetching, isError } = useFetchChartQuery(collectionsId);
  console.log(data);

  if (isFetching) {
    return;
  } else if (isError) {
    return;
  }

  return (
    <CollectionCard collections={data} extraCollections={collectionData} />
  );
};

export default CollectionList;
