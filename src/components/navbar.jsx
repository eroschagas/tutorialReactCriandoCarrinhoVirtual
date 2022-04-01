// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light navbar-mod">
      <div className="container-fluid">
        <span className="navbar-brand">
          Navbar
          <span className="badge bg-pill bg-secondary">{totalCounters}</span>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
