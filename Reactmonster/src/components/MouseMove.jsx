import React from 'react'

const Handle=()=>{
    alert("hey why did you move your mouse")
}


function MouseMove() {
  return (
    <p onMouseMove={Handle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quas possimus iusto minima impedit ipsa totam nam veritatis, omnis vero!</p>
  )
}

export default MouseMove
