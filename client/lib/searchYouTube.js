var searchYouTube = (query, callback) => {
  $.get("https://www.googleapis.com/youtube/v3/search", {
    part: 'snippet',
    key: YOUTUBE_API_KEY,
    q: query,
    maxResults: 5,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done((data) => {
    callback(data);
  })
};

window.searchYouTube = searchYouTube;
