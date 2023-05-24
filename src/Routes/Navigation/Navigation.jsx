import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crownsvg } from "../../Assets/crown.svg";
import "./navigation.scss";
function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <Crownsvg className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          <Link to="/sign-in" className="nav-link">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
