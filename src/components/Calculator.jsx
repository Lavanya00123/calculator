import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {

  const[height, setHeight]=useState(170)
  const[weight, setWeight]=useState(60)

  const getBmi=(height, weight)=>{
    const heightInMeters=height/100
    const bmi=weight/heightInMeters
    return bmi.toFixed(2)
  }
  
  return (
    <div>
      {/* ---------------------------------First section -------------------- */}
      <h1>BMI CALCULATOR</h1>
      <img src='https://assets.ccbp.in/frontend/hooks/bmi-levels-img.png' width="1700px"></img>

  {/* ------------------------------------------Second Section ------------------- */}
    <div className='main-card-container'>
       <div className='main-container'>

        <div className='First-card'>
          <h2>Height</h2>
          <p>{height}cms</p>
          <button onClick={()=>setHeight(height-1)}>-</button>
          <button onClick={()=>setHeight(height+1)}>+</button>
        </div>

        <div className='Second-card'>
          <h2>Weight</h2>
          <p>{weight}kgs</p>
          <button onClick={()=>setWeight(weight-1)}>-</button>
          <button onClick={()=>setWeight(weight+1)}>+</button>
        </div>


{/* -------------------------------------Third section-------------- */}
        <div className='Last-section'>
        <h3>BMI :{getBmi(height,weight)}</h3>
        
        </div>

        </div>
      </div>
     
    </div>
  )
}

export default Calculator



