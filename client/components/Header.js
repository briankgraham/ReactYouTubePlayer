var Header = ({handleSearch, inputRef}) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search inputRef={inputRef} handleSearch={handleSearch}/>
    </div>
  </nav>
);

window.Header = Header;
