var VideoList = ({videos, handleClick}) => {
  const VideoEntries = videos.map((video) => {
    return (<VideoListEntry key={video.id.videoId} video={video} handleClick={handleClick}/>)
  });
  return (
    <div className="video-list media">
      {VideoEntries}
    </div>
  );
}

window.VideoList = VideoList;
