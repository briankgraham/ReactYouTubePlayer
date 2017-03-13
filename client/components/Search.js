var Search = ({handleSearch}) => (
  <div className="search-bar form-inline">
    <input 
      id="search" 
      onKeyPress={() => handleSearch()} 
      className="form-control" type="text" />
    <button onClick={() => handleSearch()}className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

window.Search = Search;
