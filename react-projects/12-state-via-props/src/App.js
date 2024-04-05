import { useState } from 'reat';
import './App.css';
import Button from './components/Button.js';
import Counter from './components/Counter.js';

function App() {
  return (
    <div className="App">
      <Counter />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
}

export default App;
