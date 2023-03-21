import Reusable from '../Reusable/Reusable';
import { useFetchSongsReusableQuery } from '../../store';

const Popular = function () {
  const songsIdArr = [
    '0GNI8K3VATWBABQFAzBAYe',
    '3FPSa57fnk6nIGt2JiUSjo',
    '3hRV0jL3vUpRrcy398teAU',
    '3arxPA32v1n0iWnOAHEBM3',
    '65DzdjRWH35DNsBZBjW523',
    '3S8jK1mGzQi24ilFb45DAZ',
    '0rKtyWc8bvkriBthvHKY8d',
    '6JS7gLuqIg5uPELAYBwxEq',
    '31sSFHIe4NaxltVFOEIcTa',
  ];

  const { data, isFetching, isError } = useFetchSongsReusableQuery(songsIdArr);

  const header = 'Popular In Your Area.';
  let content;

  if (isFetching) {
    return;
  } else if (isError) {
    return;
  } else {
    // console.log(data.tracks);
    content = <Reusable header={header} data={data.tracks} />;
  }

  return content;
};

export default Popular;
