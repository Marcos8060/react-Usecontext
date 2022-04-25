import React from 'react'
import userDetailContext from './UserDetail'
import { useContext } from 'react'

function SubChildComponent() {
var contextData = React.useContext(userDetailContext)

  return (
    <>
     <h2>This is the sub child component</h2>
      {/* <h4>Username : {contextData.name}</h4> */}
      {/* <p>Age : {contextData.age}</p> */}
    </>
  )
}

export default SubChildComponent