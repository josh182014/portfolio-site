import React, { useState } from 'react';

const SearchBar = (props) => {

    const [ searchState, setSearchState ] = useState({
        search: ''
    })
    
    const handleChanges = (e) => {
        setSearchState({
            search: e.target.value
        })
    }

    const searchClick = () => {
        document.querySelector(".fa-search").classList.toggle('hidden')
        document.querySelector(".searchInput").classList.toggle('hidden')
        // document.querySelectorAll(".fas")[0].style.margin = "0 2px 0 2px";
        document.querySelector(".searchInput").focus();
    }

    const searchBlur = () => {
        document.querySelector(".fa-search").classList.toggle('hidden')
        document.querySelector(".searchInput").classList.toggle('hidden')
    }

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(searchState.search)
    }

    return (
        <>
            <i onClick={searchClick} className="fas fa-search fa-2x"></i>
            <form onSubmit={handleSearch}>
                <input
                    onBlur={searchBlur}
                    className='searchInput hidden'
                    type='text'
                    placeholder='Search'
                    onChange={handleChanges}
                    value={searchState.search} />
            </form>
        </>
    );
}
 
export default SearchBar;