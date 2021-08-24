import React from 'react'

const Person = ({person}) =>{
    return(
    
     person.map((persons)=>(<p key = {persons.id}>{persons.name}</p>))
        
    )
}

export default Person