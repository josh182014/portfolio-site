import React, { useState } from 'react';

const SearchBar = (props) => {

    const [ searchState, setSearchState ] = useState({
        search: '',
        type: ''
    })
    
    const handleChanges = (e) => {
        setSearchState({
            ...searchState, search: e.target.value
        })
    }

    const searchClick = () => {
        document.querySelector(".fa-search").classList.toggle('hidden')
        document.querySelector(".search-options").classList.remove('hidden')
        document.querySelector(".searchInput").classList.remove('hidden')
        document.querySelector(".searchInput").focus();
        document.querySelector(".searchInput").focus();
    }

    const searchBlur = () => {
            document.querySelector(".fa-search").classList.toggle('hidden')
            document.querySelector(".searchInput").classList.toggle('hidden')
        document.querySelector(".search-options").classList.toggle('hidden')


    }

    const typeClick = (e) => {
        setSearchState({
            ...searchState,
            type: e.target.value
        })
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if (searchState.type === 'query') {
            window.open(`https://github.com/josh182014?utf8=✓&tab=repositories&q=${searchState.search}&type=&language=`)
        }
        else if(searchState.type === 'language') {
            window.open(`https://github.com/josh182014?utf8=✓&tab=repositories&q=&type=&language=${searchState.search}`)
        }
    }

    return (
        <>
            <i onClick={searchClick} className="fas fa-search fa-2x"></i>
            <form onSubmit={handleSearch}>
                <input
                    // onBlur={searchBlur}
                    className='searchInput hidden'
                    type='text'
                    placeholder='Search My Repositories'
                    onChange={handleChanges}
                    value={searchState.search} />
                <div className='search-options hidden'>
                    Please select what you would like to search by<br></br>
                    <input
                    onClick={typeClick}
                        className='language-radio'
                        type='radio'
                        name='type'
                        value='language'
                        required
                    />Language<br></br>
                    <input
                        onClick={typeClick}
                        className='query-radio' 
                        type='radio'
                        name='type'
                        value='query'
                        required
                    />Query
                    <button className='search-submit' type='submit'>Search</button>            
                </div>
            </form>
        </>
    );
}
 
export default SearchBar;