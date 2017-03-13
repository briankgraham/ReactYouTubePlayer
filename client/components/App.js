var App = React.createClass({
  debounce(func, time) {
    setTimeout(func, time);
  },

  getInitialState() {
    return {
      videos: [],
      currentVideo: null
    };
  },

  componentDidMount() {
    this.handleSearch('react tuts');
  },

  handleClick(vid) {
    this.setState({
      currentVideo: vid
    });
  },

  handleSearch(query) {
    var input = query || document.getElementById('search').value;
    searchYouTube(input, (data) => {
      this.setState({
        videos: data.items,
        currentVideo: data.items[0]
      });
    });
  },

  render() {
    return (
      <div>
        <Header handleSearch={() => this.debounce(this.handleSearch, 1500)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} handleClick={this.handleClick}/>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App videos={window.exampleVideoData}/>, document.getElementById('app'));
