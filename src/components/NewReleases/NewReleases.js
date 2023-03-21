import Reusable from '../Reusable/Reusable';
import { useFetchSongsReusableQuery } from '../../store';

const NewReleases = function () {
  const songsIds = [
    '58VNpcJpI5dEKxYByCkbXc',
    '6zvqq50PL7io0rprbkrYc9',
    '2Y67qsABsPKMrvCxPCzL6r',
    '2tB9OFgAHjAds3cqquLlvp',
    '4cEqoGTqPRZy76Yl3ymj3V',
    '2edZase3fgTjQMWKPPar5N',
    '52NGJPcLUzQq5w7uv4e5gf',
    '4GITtbZtRCQXhWLMXrWXHt',
    '7k0wVBW3cvV6Xmb87JikIf',
    // '52ATmaOVmLETcuebnIZ12O',
  ];

  const { data, isFetching, isError } = useFetchSongsReusableQuery(songsIds);

  const header = 'New Releases.';
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

export default NewReleases;
