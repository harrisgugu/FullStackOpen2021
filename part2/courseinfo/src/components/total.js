import React from 'react'


const Total = ({parts}) => {
   var total =  parts.reduce(function(sum, part){
    return sum+ part.exercises},0)
    return(
        <div>Total of {total} exercises</div>
    )
}

export default Total