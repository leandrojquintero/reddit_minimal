import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSearchTerm, selectSearchTerm } from './searchTermSlice';

export default function SearchTerm() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
   

    const onChangeSearchTermHandler = (e) => {
      const userInput = e.target.value;
      dispatch(setSearchTerm(userInput));
    }

    return (
      <div id="search-container">  
        <input 
          id='search'
          type='search'
          value={searchTerm}
          onChange={onChangeSearchTermHandler}
          placeholder='Search Reddit Minimal' />
      </div>
    );
};