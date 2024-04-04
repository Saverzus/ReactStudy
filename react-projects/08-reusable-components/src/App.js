import './App.css';
import MyComponent from './components/MyComponent.js';
import Other from './components/OtherComponent.js';

function App() {
  return (
    <div className="App">
      <MyComponent />
      <Other />
      <MyComponent />
      <Other />
      <MyComponent />
    </div>
  );
}

export default App;
