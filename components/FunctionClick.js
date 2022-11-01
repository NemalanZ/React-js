//Event Handling in functional component

import React from 'react'

function FunctionClick() {
  function clickHandler(){
    alert("Functional button clicked")
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button> 
      {/* Note: onClick={clickHandler()} do not use curle braces in event*/}
    </div>
  )
}

export default FunctionClick