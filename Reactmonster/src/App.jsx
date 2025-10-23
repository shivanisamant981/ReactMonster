import { useState } from "react";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import MouseMove from "./components/MouseMove";
import Product from "./components/Product";
import Userstatus from "./components/Userstatus";
import Weather from "./components/Weather";
import UseState from "./components/UseState";

function App() {
  const date=new Date();
  const Tdate=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
  const day=date.getDate()+":"+date.getDay();
  const product ={
    name:" ASUS laptop",
    price:12000,
    avail:"In store"
  };
  const num=[1,2,3,4,5,6]
  const data=[{
    name:"shivani",
    location:"dehradun",
    email:"shivanisamant898@gmail.com",
  },{
     name:"saurabh",
    location:"delhi",
    email:"saurabhsamant898@gmail.com",

  },
  {
     name:"ravi",
    location:"pithoragarh",
    email:"ravisamant898@gmail.com",

  },
]
  const [count,setCount]=useState(0)
  console.log(count);
   const increment=()=>{
    setCount(count+1);
   }

 

  return (
    <>
    {/* <Header></Header>
    <Main/>
    <Footer/>
    <p> the time is {Tdate}</p>
    <p> the day is{day}</p>
    <p> name:{product.name} price:{product.price} avail:{product.avail}</p>
      {
        num.map((num)=>(
          <ul key={num}>
            <li>{num}</li>
          </ul>
        ))
      }
      {
        data.map(({name,email,location})=>(
          <ul key={Math.random()}>
            <li>
              {name} </li>
             <li>{email}</li> 
              <li>{location}</li>

           
          </ul>
        ))
      } */}
      {/* <Product/>
      <User name="Taylor samant" age={22} isMarried={true} hobbies={["coding ","gaming","sleeping"]}
       */}
       
      
      {/* <Password valid={false}/>
    <Weather temp={80}/>
    <Userstatus loggedIn={true} isAdmin={false}/> */}
    {/* <MouseMove /> */}
    {/* <h3>{count}</h3>
    <button onClick={increment}>Click me</button> */}
    <UseState/>
   
    </>
      
  )

}

export default App

// const User=({name,age,isMarried,hobbies})=>{
//   return(
//     <>
//     <h1 >{name}</h1>
//     <h2>{age}</h2>
//     <h3> {isMarried}</h3>
//     <h4>{hobbies}</h4>

//     </>
//   )
// }
// conditional Rendering

const Validpass=()=>{
  return(<><h1>this is valid password</h1></>)
}
const InvalidPass=()=>{
  return(<>
  <h1>This is invalid password</h1>
  </>)
}
const Password=(props)=>{
  if(props.valid){
    return <Validpass/>
  }
  else{
    return <InvalidPass/>
  }
}