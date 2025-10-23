import React from 'react'




//well it is the assignment of the conditional rendering

function Weather(props) {
      if(props.temp<15){
                return <Lowtemp/>
            }
            else if(props.temp>15 && props.temp<25){
                return <Medium/>
            }
            else{
                return <High/>
            }
}



//well it is the assignment of the conditional rendering

export default Weather
const Lowtemp=()=><p>It is cold outside</p>
const Medium=()=> <p>It is nice outside</p>
const High=()=><p>It is hot outside</p>
