import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSearchTerm, clearSearchTerm, selectSearchTerm } from './searchTermSlice';

//asset import
import searchIconSearch from '../../assets/icons/search-search-50.png'
import searchIconCancel from '../../assets/icons/search-cancel-50.png'

export default function SearchTerm() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
   

    const onChangeSearchTermHandler = (e) => {
      const userInput = e.target.value;
      dispatch(setSearchTerm(userInput));
    }

    const onClearSearchTermHandler = () => {
      dispatch(clearSearchTerm());

    }
    return (
        <div id="search-container">  
          <img id="search-icon" src={searchIconSearch} alt="Search Icon"/>      
          <input 
            id='search'
            type='text'
            value={searchTerm}
            onChange={onChangeSearchTermHandler}
            placeholder='Search Reddit Minimal' />
           {searchTerm.length > 0 && (
            <button
              onClick={onClearSearchTermHandler} 
              type="button" 
              id="clear-search-button"
            >
              <img id="clear-icon" src={searchIconCancel} alt='Clear Search Icon'/> 
            </button>
           )}
        </div>
    );
};