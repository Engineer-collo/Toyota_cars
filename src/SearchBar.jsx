import { useState } from "react"

function SearchBar() {
    const [SearchTerm ,setSearchTerm] = useState([]);
    return( 
        <>
        <input type="text" value= "search" placeholder="Search here..."/>
        </>
    )
}

export default SearchBar;