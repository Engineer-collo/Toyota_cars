import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Contact from "./Contact";
// import { useState } from "react";

function Navbar({onSearch}) {
  // const [SearchTerm ,setSearchTerm] = useState("");

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   onSearch(SearchTerm) // call the search function passed as a prop
  // }

  return (
    <nav>
      <img  className="logoImg"  src="https://i.pinimg.com/236x/7d/46/4c/7d464c632f934a181060caec6fa21eff.jpg" alt=" Toyota Logo" />
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
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      {/* <form id="search-form" onsubmit=
            {handleSearch}>
                <input 
                    type="text" 
                    id="search-input" 
                    placeholder="Search" 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form> */}
      <SearchBar onSearch = {onSearch}/>
    </nav>
  );
}

export default Navbar;