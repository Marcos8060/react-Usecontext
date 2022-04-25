import React,{useState} from 'react'
import ChildComponent from './ChildComponent';

function UserDetail() {
    var [userDetails, setUserDetails] = useState({
        name: "Mayank",
        age: 30
      });

  return (
    <>
      <h2>This is the parent component</h2>
      <ChildComponent userDetails={userDetails} />
    </>
  )
}

export default UserDetail