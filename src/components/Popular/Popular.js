import Image from '../../images/Rectangle 14 (3).png';
import Reusable from '../Reusable/Reusable';

const Popular = function () {
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

  const header = 'Popular In Your Area.';

  return <Reusable header={header} data={releases} />;
};

export default Popular;
