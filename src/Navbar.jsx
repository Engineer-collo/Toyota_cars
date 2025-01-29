import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>

      <ul className="navBar">
      <img  className="logoImg"  src="https://i.pinimg.com/236x/7d/46/4c/7d464c632f934a181060caec6fa21eff.jpg" alt=" Toyota Logo" />
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;