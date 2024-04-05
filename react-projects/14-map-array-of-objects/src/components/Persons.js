import Person from './Person.js'
import persons from '../data/persons.js'

function Persons() {
    return (
        <div>
            {persons.map((person) => {
                return (
                    <Person key={person.id} {...person}
                    />
                )
            })}
        </div>
    )
}

export default Persons;