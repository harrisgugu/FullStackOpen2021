import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './total'

const Course  = ({courses}) =>{
    return(
        <div>  
            <Header name = {courses[0].name}/>
            <Content parts = {courses[0].parts}/>
            <Total parts = {courses[0].parts}/>
            <Header name = {courses[1].name}/>
            <Content parts = {courses[1].parts}/>
            <Total parts = {courses[1].parts}/>
        </div>
    )
}

export default Course