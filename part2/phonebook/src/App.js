import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',id:1,number:'040-1234567'},{name: 'Ada Lovelace',id:2,number:'1213-234345'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber,setNewNumber] = useState('')
  const addPerson = (event) =>{
    event.preventDefault()
    const personObj = {
    name: newName,
    number: newNumber,
    id:persons.length+1,
    }
    persons.some(element=> element.name===newName)
      ? window.alert(newName+" is already added to the phonebook!")
      : setPersons(persons.concat(personObj))
    setNewName("") 
  }

  
  const handleNameChange = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) =>{
        setNewNumber(event.target.value)
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addPerson} >
        <div>
          name: <input onChange = {handleNameChange} value = {newName} />
        </div>
        <div>
          number: <input onChange = {handleNumberChange} value = {newNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
      <Person person = {persons}/>  
    </div>
  )
}

export default App
