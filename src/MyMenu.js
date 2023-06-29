import { Outlet, Link } from "react-router-dom";
import Cookies from 'js-cookie';
function MyMenu() {
  alert(Cookies.get('id'))
  var userid = Cookies.get('userid');
  if (userid === undefined) {
    window.location = "/adminlogin";
  }

  return (<div><nav className="navbar navbar-expand-xl navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">Shopping Admi Panel</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse show" id="navbarDark">
        <ul className="navbar-nav me-auto mb-2 mb-xl-0">
          <li className="nav-item">
            <Link className="nav-link text-light fw-bold" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold text-light" to="/Category">Categary</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold text-light" to="/product" tabIndex={-1}>Product</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold text-light" to="/user" tabIndex={-1}>User</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold text-light" to="/order" tabIndex={-1}>Orders</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold text-light" to="/adminlogout" tabIndex={-1}>Logout</Link>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
    <Outlet />
  </div>
  );
}
export default MyMenu;