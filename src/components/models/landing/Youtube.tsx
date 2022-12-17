import YouTube, { YouTubeProps } from "react-youtube";

export const Youtube = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "650",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return <YouTube videoId="y-eh4xx3jPQ" opts={opts} onReady={onPlayerReady} />;
};
