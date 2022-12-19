import { useState } from "react";
import styled from "styled-components";

export const Youtube = () => {
  const [isThumbnail, setIsThumbnail] = useState(true);
  const youtubeId = "y-eh4xx3jPQ";

  return (
    <YoutubeContainer>
      {isThumbnail ? (
        <img
          src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
          onClick={() => setIsThumbnail(false)}
          alt="サムネイル"
          width={600}
          height={300}
        />
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          width={600}
          height={300}
        ></iframe>
      )}
    </YoutubeContainer>
  );
};

const YoutubeContainer = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 560px;
  }
  iframe {
    width: 100%;
    height: 560px;
  }
`;
