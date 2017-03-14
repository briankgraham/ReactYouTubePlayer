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

  handleClick(id) {
    this.setState({
      currentVideo: id
    });
  },

  handleSearch(query) {
    var input = query || this.inputRef.value;
    searchYouTube(input, (data) => {
      this.setState({
        videos: data.items,
        currentVideo: data.items[0]
      });
    });
  },

  render() {
    const currentVideo = this.state.videos.filter(vid => vid.id === this.state.)
    return (
      <div>
        <Header inputRef={ref => this.input = ref} handleSearch={() => this.debounce(this.handleSearch, 1500)}/>
        <div className="col-md-7">
          <VideoPlayer video={currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} handleClick={this.handleClick}/>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App videos={window.exampleVideoData}/>, document.getElementById('app'));
