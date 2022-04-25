import React from 'react'

function SubChildComponent(props) {
  return (
    <>
     <h2>This is the sub child component</h2>
      <h4>Username : {props.userDetails.name}</h4>
      <p>Age : {props.userDetails.age}</p>
    </>
  )
}

export default SubChildComponent