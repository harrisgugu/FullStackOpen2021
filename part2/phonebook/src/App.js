import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',id:1},{name: 'Ada Lovelace',id:2}
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) =>{
    event.preventDefault()
    const personObj = {
    name: newName,
    id:persons.length+1,
    }
    setPersons(persons.concat(personObj))
    setNewName("") 
    persons.forEach(element=> {
      if(newName===element.name){
        window.alert(newName+ " is already added to the phonebook!")
        setPersons(persons.pop())
      }
    })
  }

  const handleNameChange = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addPerson} >
        <div>
          name: <input onChange = {handleNameChange} value = {newName} />
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