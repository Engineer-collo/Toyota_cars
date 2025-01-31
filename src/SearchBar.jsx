import { useState } from "react"

function SearchBar({ searchQuery, setSearchQuery}) {
    // const [SearchTerm ,setSearchTerm] = useState("");

    // const handleSearchInput = (e) => {
    //     e.preventDefault();
    //     setSearchTerm(e.target.value)
    //     onSearch(e.target.value) // call the search function passed as a prop
    // }
    return( 
        <>           
                <input 
                    type="text" 
                    id="search-input" 
                    placeholder="Search" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
        </>
    )
}

export default SearchBar;