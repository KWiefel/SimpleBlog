import { Link, NavLink } from "react-router-dom";
import "./../components/Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <p className="logo">My Life</p>
      </NavLink>
      <div className="navlink">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
