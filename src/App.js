import './App.css';
import Navbar from './components/Navbar';
import Rules from './components/Rules';
import PlayGame from './components/PlayGame';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Rules />
      <PlayGame />
    </div>
  );
}

export default App;
