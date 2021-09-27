import './App.css';
import FetchApi from './components/FetchApi';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <h1>Hacker News</h1>
      <FetchApi></FetchApi>
      <User />
    </div>
  );
}

export default App;
