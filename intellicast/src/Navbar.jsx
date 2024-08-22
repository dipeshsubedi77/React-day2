import React, { useState } from 'react'





const Navbar = () => {

  const state = useState(0)
  const firstItem = state[0]
  const secondItem =  state[1]
   const decreaseCount = () =>{
     secondItem(firstItem - 1)
   }



  return (
    <div>
      <h1>{firstItem}</h1>
      <button onClick={decreaseCount}> +</button>
      
    </div>
  )
}

export default Navbar



// const Navbar = () => {
//   // const state = useState(0)
//   // const firstItem  = state[0]
//   // const SecondItem = state[1]

//   // const increaseCount = ()=>{
//   //  SecondItem(firstItem + 1)
//   }
  
//   return (
//     <div>
//         <h1>{firstItem}</h1>
//         <button onClick={increaseCount}>+</button>
       
      
//     </div>
//   )
// }

// export default Navbar
