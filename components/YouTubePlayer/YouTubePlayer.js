import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {
    
    const onReady = (event) => {
      const player = event.target;
      player.playVideo();
    };
  
    const onError = (error) => {
      console.error('YouTube Player Error:', error);
    };

    const opts = {
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
  
    return (
      <YouTube
        videoId={videoId}
        onReady={onReady}
        onError={onError}
        opts={opts}
      />
    );
  };
  
  export default YouTubePlayer;