import React, { createContext, useContext, useState, memo } from 'react'

import PropTypes from 'prop-types'
import CompB from './CompB'

const CurrentUserContext = createContext(null)
const Name = createContext(null)

function CompA(props) {
  const [currentUser, setCurrentuser] = useState(null)
  
let name = "yash"

console.log("h i")

  // return (
  //   <div>
  //   <CurrentUserContext.Provider value={{currentUser, setCurrentuser}}>
  //   <Form />
  //   </CurrentUserContext.Provider>
  //   </div>
  // )

  return (
    <div>
    <Name.Provider value={name}>
    <CompB />
    </Name.Provider>
    </div>
  )


}

export default CompA
export {Name}

function Form () {
  return (
<Panel title={"Welcome"}>
<LoginButton /></Panel>
  )
}

function LoginButton() {
  const {currentUser, setCurrentuser} = useContext(CurrentUserContext)

  if(currentUser !== null) {
    return <p>You logged in as {currentUser.name}</p>
  }

  return (
    <Button onClick={() => {
      setCurrentuser({name : 'YASH'})
    }}>Log in as Yash</Button>
  )
}


function Panel({title , children}) {
  return (
    <section>
    <h1>{title}</h1>
    {children}
    </section>
  )
}


function Button({ children, onClick}) {
  return (
    <button onClick={onClick} >
    {children}
    </button>
  )
}