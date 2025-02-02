
import { useState } from "react"

function SearchBar({ searchQuery, setSearchQuery}) {   
    return( 
        <>           
                <input 
                    type="text" 
                    id="search-input" 
                    placeholder="Search" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoComplete="off"
                />
        </>
    )
}

export default SearchBar;
