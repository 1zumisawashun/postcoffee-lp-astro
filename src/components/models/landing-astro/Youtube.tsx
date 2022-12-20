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
        />
      ) : (
        <IframeContainer>
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </IframeContainer>
      )}
    </YoutubeContainer>
  );
};

const YoutubeContainer = styled.div`
  width: 100%;
  height: auto;
  cursor: pointer;
  img {
    width: 100vw;
    height: auto;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const IframeContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
`;
