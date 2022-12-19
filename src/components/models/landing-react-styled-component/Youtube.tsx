import React, { useState } from "react";

export const Youtube = () => {
  const [isThumbnail, setIsThumbnail] = useState(true);
  const youtubeId = "y-eh4xx3jPQ";

  return (
    <div className="App">
      {isThumbnail ? (
        <img
          src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
          onClick={() => setIsThumbnail(false)}
          alt="サムネイル"
        />
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};
