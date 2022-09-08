import React from 'react';

function Search(){
    return (
        <form action="/" method="get">
        <label htmlFor="header-search">
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search furniture"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    )
  }
export default Search