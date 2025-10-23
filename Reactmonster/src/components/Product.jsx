import React from 'react'

function Product() {
    const prod=[
        {id:1 ,name:"shivani",class:12 },
        {id:2 ,name:"saurabh",class:10 },
        {id:3 ,name:"ram",class:1 },
        {id:4 ,name:"syam",class:19 },
    ]
  return (
    <div>
        {
            prod.map((prod)=>(
                <ul key={prod.id}>
                    <li>{prod.id}</li>
                    <li>{prod.name}</li>
                    <li>{prod.class}</li>
                </ul>
            ))
        }

      
    </div>
  )
}

export default Product
