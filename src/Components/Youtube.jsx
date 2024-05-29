import React, { useState } from 'react';
import YouTube from 'react-youtube';
const YouTube = ({ videoId }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const onThumbnailClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div>
      {isVideoPlaying ? (
        <YouTube videoId={videoId} opts={{ playerVars: { autoplay: 1 } }} />
      ) : (
        <div onClick={onThumbnailClick} style={{ cursor: 'pointer' }}>
          <img
            src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
            alt="YouTube Video Thumbnail"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      )}
    </div>
  );
};

export default YouTube;
