import logo from './assets/images/reddit minimal logo.png';
import './App.css';
import SearchTerm from './features/SearchTerm/SearchTerm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Reddit <span>Minimal</span></p>
        <SearchTerm />
      </header>
    </div>
  );
}

export default App;
