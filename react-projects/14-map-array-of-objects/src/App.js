import './App.css';
import Person from './components/Person.js'
import persons from './data/persons.js'




function App() {
  return (
    <div className="App">

      {persons.map((person) => {

        // const { id, firstName, lastName, email, img } = person
        return (
          <Person key={person.id} {...person}
          />
        )
      })}


    </div>

  );
}

export default App;
