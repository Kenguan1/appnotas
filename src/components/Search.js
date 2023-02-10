import React from 'react';
import {MdSearch} from 'react-icons/md';

const Search = ({ handleSearchNote }) => {

    return(
        <div className='search'>
            <MdSearch className="search-icons" size="1.5em" />
            <input 
                onChange={(event) => handleSearchNote(event.target.value)}   /* el state se actualiza cada vez que el input cambia ya que handleSearchNote contiene a setSearchNote  */
                type='text' 
                placeholder='Buscar una nota...' 
            />
        </div>
    );
}

export default Search;