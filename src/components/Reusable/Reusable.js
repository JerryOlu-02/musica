import './Reusable.scss';

const Reusable = function ({ header, data }) {
  const renderedData = data.map((release, index) => {
    return (
      <div className="reusable-list-show" key={index}>
        <img src={release.img} alt="image__alter" />
        <p>{release.name}</p>
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
