import './musicbar.scss';
import { RxTrackNext, RxTrackPrevious, RxShuffle } from 'react-icons/rx';
import { BsRepeat1, BsPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { HiVolumeUp } from 'react-icons/hi';
import MusicImg from '../../images/Rectangle 26.png';
import { useState, useEffect } from 'react';

const MusicBar = function () {
  const [value, setValue] = useState(70);

  const [volume, setVolume] = useState(70);

  useEffect(() => {
    const rangeInput = document.querySelector('.song-time');
    const volumeInput = document.querySelector('.volume');

    rangeInput.style.backgroundSize = `${value}%`;
    volumeInput.style.backgroundSize = `${volume}%`;

    const handleVolume = function (e) {
      if (e.key === 'AudioVolumeUp') {
        setVolume((prevVolume) => Math.min(prevVolume + 10, 100));
      } else if (e.key === 'AudioVolumeDown') {
        setVolume((prevVolume) => Math.max(prevVolume - 10, 0));
      } else return;
    };

    window.addEventListener('keydown', handleVolume, false);

    return () => {
      window.removeEventListener('keydown', handleVolume);
    };
  }, [value, volume]);

  const handleChange = function (e) {
    setValue(e.target.value);
  };

  const handleVolumeChange = function (e) {
    const vol = parseInt(e.target.value);

    setVolume(vol);
  };

  return (
    <div className="musicbar">
      <div className="musicbar-div-one">
        <img src={MusicImg} alt="Music__picture" />

        <div>
          <p>Seasons In</p>
          <p>James</p>
        </div>
      </div>

      <div className="musicbar-div-two">
        <div>
          <RxShuffle />
          <RxTrackPrevious />
          <div className="play-pause">
            <BsPlayFill />
            <BsFillPauseFill />
          </div>
          <RxTrackNext className="next-btn" />
          <BsRepeat1 />
        </div>

        <input
          className="song-time"
          onChange={handleChange}
          value={value}
          type="range"
        />
      </div>

      <div className="musicbar-div-three">
        <HiVolumeUp />

        <input
          value={volume}
          onChange={handleVolumeChange}
          className="volume"
          type="range"
        />
      </div>
    </div>
  );
};

export default MusicBar;
