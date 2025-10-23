import React, { useState } from 'react'

function UseState() {
    const [friend,setfriend]=useState(["shivai","saurabh"]);
    const addFriend=()=>setfriend([...friend,"syam"])
    const [Movies,setmovie]=useState({
        name:"conjuring",
        rating:10,
    })
    const handleclick=()=>{
        const copymovie={
            ...Movies,
            rating:5,
        }
        setmovie(copymovie);
    }
  return (
    <div>
        {
            friend.map((f)=>(
                <li key={Math.random()}>{f}</li>
            ))
        }
        <button onClick={addFriend}>Add new memeber</button>
        <h1>Name:{Movies.name}</h1>
        <h2>Rating:{Movies.rating}</h2>
        <button onClick={handleclick}>change rating</button>

      
    </div>
  )
}

export default UseState
