import React, { useState } from 'react'
import HandsonThreeData from './FormData'

const HandsonThreeMain = () => {

  const[name,setName] = useState('')
  const[department,setDepartment] = useState('')
  const[rating,setRating] = useState('')
  const[data,setData] = useState([])
  const[click,setClick] = useState(true)


  const handleChange=(e)=>{
    const { name, value } = e.target;
        // Update the correct state based on the input field name
        if (name === 'name') {
          setName(value);
        } else if (name === 'department') {
          setDepartment(value);
        } else if (name === 'rating') {
          setRating(value);
        }
  }

  const handleCLick=()=>{
    const obj={
      name : name,
      department : department,
      rating : rating
    }

    const value = [...data,obj]
    setData(value)
    setClick(false)
  }

  const togleFunction=()=>{
    setClick(!click)
  }

  return (
    <div>
      {click?(
        <>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
      <div><span className="boldtext">Name : </span><input className="input" name='name' onChange={handleChange}/></div>
      <div><span className="boldtext"> Department : </span><input className="input" name='department' onChange={handleChange}/></div>
      <div><span className="boldtext">Rating : </span><input className="input" name='rating' onChange={handleChange}/></div>
      <button onClick={handleCLick}>Submit</button>
        </>) : ( 
        <HandsonThreeData value = {data} toggle = {togleFunction}/>
        )}
    </div>
  )
}

export default HandsonThreeMain