import './Reusable.scss';
import { Fragment } from 'react';

const Reusable = function ({ header, data }) {
  // console.log(data);

  const renderedData = data.map((reusableSongs) => {
    if (!reusableSongs) return <Fragment key={null}> </Fragment>;

    return (
      <div className="reusable-list-show" key={reusableSongs.id}>
        <img src={reusableSongs.album.images[0].url} alt="image__alter" />
        <div>
          <p>{reusableSongs.name}</p>
          <p>{reusableSongs.artists[0].name}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="reusable">
      <h3>{header}</h3>

      <div className="reusable-list">{renderedData}</div>
    </div>
  );
};

export default Reusable;
