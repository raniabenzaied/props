

import React from 'react'

const HandleName = ({handleEvent,FirstName}) => {
  return (
    <div>
 <button onClick={()=>handleEvent(FirstName)}   >click</button>    </div>
  )
}

export default HandleName
