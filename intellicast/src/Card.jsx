import React from 'react'

const Card = (props) => {
   const name =props.car
  return (
    <div>

        <div>
           {name}
        </div>


        {/* <div>
            {name}
        </div>
        <div>
           {name}
        </div>
       */}
    </div>
  )
}

export default Card
