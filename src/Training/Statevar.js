import React from 'react'
import PropTypes from 'prop-types'

function Statevar(props) {
    var x = 10

    function handleClick() {
        x = 15
    }
    console.log(x)
  return (
    <div>
    <h1>{x}</h1>
    <button onClick={handleClick}>click</button>
    </div>
  )
}

Statevar.propTypes = {

}

export default Statevar

