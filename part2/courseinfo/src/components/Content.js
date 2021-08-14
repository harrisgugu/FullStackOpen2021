import React from 'react'
import Part from './Part'


const Content = ({parts})=>{
    return(
      <div>  
        {parts.map(parts => <Part key = {parts.id} name = {parts.name} exercises = {parts.exercises}/>)}
      </div>
    )
    
  }

  export default Content