import './App.css';
import PetInfo from './components/PetInfo.js';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age={4} />

      <PetInfo animal="dog" age={22} />

    </div>
  );
}

export default App;
