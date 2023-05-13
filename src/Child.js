import React from 'react'

const Child = (props) =>{
  console.log(props.data[0]?.name)
  return(
    <div>
      <p>Child</p>
    </div>
  )
}

export default Child