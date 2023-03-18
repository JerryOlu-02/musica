import Image from '../../images/Rectangle 14 (3).png';
import Reusable from '../Reusable/Reusable';

const NewReleases = function () {
  const releases = [
    {
      img: Image,
      name: `Everything's Black`,
    },
    {
      img: Image,
      name: `Everything's Black`,
    },
    {
      img: Image,
      name: `Everything's Black`,
    },
    {
      img: Image,
      name: `Everything's Black`,
    },
    {
      img: Image,
      name: `Everything's Black`,
    },
    {
      img: Image,
      name: `Everything's Black`,
    },
    {
      img: Image,
      name: `Everything's Black`,
    },
    {
      img: Image,
      name: `Everything's Black`,
    },
    {
      img: Image,
      name: `Everything's Black`,
    },
    {
      img: Image,
      name: `Everything's Black`,
    },
  ];

  const header = 'New Releases.';

  return <Reusable header={header} data={releases} />;
};

export default NewReleases;
