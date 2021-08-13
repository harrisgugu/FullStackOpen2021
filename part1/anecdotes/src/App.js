import React, { useState } from 'react'

const Button = ({onClick, text}) =>(
  <button onClick = {onClick}>
    {text}
  </button>
)

const randomInt = (max) => Math.floor(Math.random()*max)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  var points = new Uint8Array(7)
  const[allPoints, setPoints] = useState(points)
  const [max, setMax] = useState(0)

  const handleClick = () =>{
    let randInt = 0
    do{
      randInt = randomInt(anecdotes.length)
    }while(randInt===selected)//prevent randonInt from generating the same number
    setSelected(randInt)

  }

  const clickVotes = () =>{

    allPoints[selected] += 1
    const copy = [...allPoints]
    setPoints(copy)
    
  }

  const Head = ({text}) => <h1>{text}</h1>

  const mostVotes = () =>{
    let maxPoints = 0
    let maxPos = 0
    for(const i in allPoints){
      console.log(i)
      if(allPoints[i]>maxPoints) {
        maxPoints =  allPoints[i]
        maxPos = i
      }
      
    }
    setMax(maxPos)
  }
  
  return (
    <div>
      <Head text= "Anecdote of the day"/>
      {anecdotes[selected]}
      <p>has {allPoints[selected]} votes</p>

      <div> <Button onClick = {()=>{clickVotes();mostVotes()}} text = 'vote'/> 
       <Button onClick = {handleClick} text = 'next anecdote'/></div>
       <Head text = "Anecdote with most votes"/>
      <p>{anecdotes[max]}</p>
      <p>Has {allPoints[max]} votes</p>
     
    </div>
  )
}

export default App