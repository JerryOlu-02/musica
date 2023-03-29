export const getMinutes = function (milliSeconds) {
  const minute = Math.round(milliSeconds / 60000);
  const seconds = Math.round(milliSeconds / 1000) % 60;

  return seconds < 10 ? `${minute} : 0${seconds}` : `${minute} : ${seconds}`;
};
