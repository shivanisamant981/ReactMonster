import React, { useState } from 'react'

function UseState() {
    const [friend,setfriend]=useState(["shivai","saurabh"]);
    const addFriend=()=>setfriend([...friend,"syam"])
    const [Movies,setmovie]=useState({
        name:"conjuring",
        rating:10,
    })
    const [hmovie,sethmovie]=useState([
        {id:1 ,name:"conjuring",rating:5},
        {id:2 ,name:"kanchna",rating:2},
        {id:3 ,name:"incidious",rating:9},
        
    ])
    const handleclick=()=>{
        // const copymovie={
        //     ...Movies,
        //     rating:5,
        // }

        setmovie({...Movies,rating:9})
        // setmovie(copymovie);
    }
    const handleEvent=()=>{
        sethmovie(hmovie.map((h)=>h.id==1?{...h,name:"tumbabd"}:h))
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
        {
            hmovie.map((hm)=>(
                <ul> <li key={hm.id}> {hm.id}</li>
                      <li>{hm.name}</li>
                      <li>{hm.rating}</li>
               
                 </ul>
                
            
            ))
        }
        <button onClick={handleEvent}> click me to change the name of the movie</button>

      
    </div>
  )
}

export default UseState
