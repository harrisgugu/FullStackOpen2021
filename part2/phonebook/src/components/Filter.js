import React from 'react'

const Filter = (props) =>{
    return(
        <div>
        filter shown with <input onChange = {props.handleFilterChange} value = {props.showFilter}/>
      </div>
    )
}

export default Filter