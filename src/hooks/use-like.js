import { useState } from 'react';

const useLike = function () {
  const [isLiked, setIsLiked] = useState([]);

  const handleLike = function (nextIndex) {
    setIsLiked((currentLikeIndex) => {
      return currentLikeIndex.includes(nextIndex)
        ? isLiked.filter((like) => like !== nextIndex)
        : [...isLiked, nextIndex];
    });
  };

  return [isLiked, handleLike];
};

export { useLike };
