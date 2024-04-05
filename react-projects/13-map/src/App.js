import { useState } from 'react';
import './App.css';
import Button from './components/Button.js';
import Counter from './components/Counter.js';

const texts = ['Click me', 'Click me plz', 'Hit me', 'Press me'];

function App() {
  const [count, setCount] = useState(0);


  const incrementCount = () => {
    return setCount(count + 1);
  }

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        return (
          <Button onClick={incrementCount} buttonText={text} key={index} />
        )
      })}
    </div>
  );
}

export default App;
