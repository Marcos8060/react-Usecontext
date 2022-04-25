import React,{useState} from 'react'
import ChildComponent from './ChildComponent';

var userDetailContext = React.createContext(null)

function UserDetail() {
    var [userDetails] = useState({
        name: "Mayank",
        age: 30
      });

  return (
    <>
      <userDetailContext.Provider value={userDetails}>

            <h2>This is the parent component</h2>
            <ChildComponent userDetails={userDetails} />

      </userDetailContext.Provider>
    </>
  )
}

export default UserDetail