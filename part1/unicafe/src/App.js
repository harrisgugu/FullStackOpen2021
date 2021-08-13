import React, { useState } from 'react'

const Button = ({handleClick,text}) => (
  <button onClick = {handleClick}>
    {text}
  </button>
)

const Head = (props) =>{
  return(<h1>
    {props.text}
  </h1>)
}

const Statistics  = (props) => {
  if(props.all===0){
    return(
      <div>No feedback given yet</div>
    )
  }

  const StatisticLine = ({text, value}) => 
      <div>{text} {value}</div>
      
  
  

  return(
    <div>
      <StatisticLine text="good" value = {props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={props.all} />
      <StatisticLine text="average" value ={props.average} />
      <StatisticLine text="positive" value ={props.positive} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  let average = ((good*1-bad*1)/all)
  let positive = good/all*100

  const handleGoodClick = () =>{
    setGood(good+1)
    setAll(all+1)
  }

  const handleBadClick = () => {
    setBad(bad+1)
    setAll(all+1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1)
    setAll(all+1)
  }

  return (
    <div>
      <Head text = 'give feedback'/>
      <Button handleClick = {handleGoodClick} text = 'good'/>
      <Button handleClick = {handleNeutralClick} text = 'neutral'/>      
      <Button handleClick = {handleBadClick} text = 'bad'/>
      <Head text = 'statistics'/>
      <Statistics good = {good} neutral = {neutral} bad = {bad} all = {all} positive = {positive} average = {average}
      
      />
    </div>
  )
}

export default App
