import React from 'react'

const HandsonThreeData = ({value,toggle}) => {
  return (
    <>
    <div id="data">
      {value.map((item,index)=>{
          return(
              <>
          <span key={index}>{item.name}</span><span> || </span>
          <span key={index}>{item.department}</span><span> || </span>
          <span key={index}>{item.rating}</span><span> , </span>
          </>
        )
    })}
    </div>
      <button onClick={toggle}>Back</button>
    </>
  )
}

export default HandsonThreeData