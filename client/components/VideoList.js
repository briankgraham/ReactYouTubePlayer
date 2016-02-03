var VideoList = ({videos, handleClick}) => {
  var stuff = videos.map((video) => {
        return (<VideoListEntry key={video.id.videoId} video={video} handleClick={handleClick}/>)
  });
  return (
    <div className="video-list media">
      {stuff}
    </div>
  );
}

window.VideoList = VideoList;
