import React from 'react'
import SubChildComponent from './SubChildComponent'

function ChildComponent(props) {
  return (
    <>
     <h2>This is the child component</h2>
     <SubChildComponent  userDetails={props.userDetails}/>
    </>
  )
}

export default ChildComponent