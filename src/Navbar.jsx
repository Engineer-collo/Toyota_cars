import { Link } from "react-router-dom";
import Logo from './assets/baby-car.png'
import SearchBar from "./SearchBar";

function Navbar({searchQuery, setSearchQuery}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav>
      {/* <img  className="logoImg"  src="https://i.pinimg.com/236x/7d/46/4c/7d464c632f934a181060caec6fa21eff.jpg" alt=" Toyota Logo" /> */}
      <span className="logo"><img  className="logoImg"  src={Logo} alt=" Toyota Logo" /> CarGari</span>
      <ul className="navBar">
        <li>
          <Link to="/" onClick={scrollToTop}>Home</Link>
        </li>
        <li>
          <Link to="/About" onClick={scrollToTop}>About</Link>
        </li>
        {/* <li>
          <Link to="/Login">Login</Link>
        </li> */}
        <li>         
          <Link to="/Contact" onClick={scrollToTop}>Reach Us</Link>
        </li>
        <li>
          <Link to="/Admin" onClick={scrollToTop}>Admin</Link>         
        </li>
      </ul>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    </nav>
  );
}

export default Navbar;