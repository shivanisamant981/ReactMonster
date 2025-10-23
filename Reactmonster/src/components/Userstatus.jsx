import React from 'react'

function Userstatus(props) {
  if(props.loggedIn && props.isAdmin){
    return <h1> hi Admin</h1>
  }
  else if(props.loggedIn){
    return <h1>hi user</h1>
  }
}

export default Userstatus
