import React from 'react'
import logo from '../assets/images/reddit minimal logo.png';
import SearchTerm from '../features/SearchTerm/SearchTerm';

export default function Header () {

    return (
      <header className="App-header">
        <div className="App-logo-container">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Reddit <span>Minimal</span></p>
        </div>
        <SearchTerm />
      </header>
    );
};