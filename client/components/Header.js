var Header = ({handleSearch}) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search handleSearch={handleSearch}/>
    </div>
  </nav>
);

window.Header = Header;
