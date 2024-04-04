import './App.css';
import PetInfo from './components/PetInfo.js';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age={4} hasPet={true} />

      <PetInfo animal="dog" age={22} hasPet={false} />

      <PetInfo animal="dog" age={22} hasPet />


    </div>
  );
}

export default App;
