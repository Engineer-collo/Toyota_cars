import { Link } from "react-router-dom";
import Logo from './assets/baby-car.png'
import SearchBar from "./SearchBar";

function Navbar({searchQuery, setSearchQuery}) {
  return (
    <nav>
      {/* <img  className="logoImg"  src="https://i.pinimg.com/236x/7d/46/4c/7d464c632f934a181060caec6fa21eff.jpg" alt=" Toyota Logo" /> */}
      <span className="logo"><img  className="logoImg"  src={Logo} alt=" Toyota Logo" /> CarGari</span>
      <ul className="navBar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Contact">Reach Us</Link>
        </li>
      </ul>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    </nav>
  );
}

export default Navbar;