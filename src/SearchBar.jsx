import { useState } from "react"

function SearchBar({ onSearch }) {
    const [SearchTerm ,setSearchTerm] = useState("");

    const handleSearchInput = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value)
        onSearch(e.target.value) // call the search function passed as a prop
    }
    return( 
        <>           
                <input 
                    type="text" 
                    id="search-input" 
                    placeholder="Search" 
                    value={SearchTerm}
                    onChange={handleSearchInput}
                />
                {/* <button type="submit">Search</button> */}
        </>
    )
}

export default SearchBar;