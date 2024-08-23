import React, { useEffect, useState } from 'react'

const Useeffect = () => {

    const[count,setCount] = useState(0)
    const[count2,setCount2] = useState(0)

    const setIncrement = () =>{
        setCount(count+1)
    }
    const setDecrement = () =>{
        setCount(count2 -1)
    }

    useEffect(()=>{
        console.log("happy programming")
    },[count,count2])

    // const[count,setCount] = useState(0)
    
    // const increaseCount = () =>{
    //     setCount(count + 1)
        
    //   }

    //   useEffect(()=>{
    //     console.log("hello world")
    //   }, [count])
  return (
    

   

    <div>
        {/* <h1>{count}</h1> */}
        {/* <button onClick={increaseCount}> +</button> */}
       <h1>{count}</h1>
       <button on onClick={setIncrement}>+</button>

       <h1>{count2}</h1>
       <button on onClick={setDecrement}>-</button>


      
    </div>
    
  )
}

export default Useeffect
