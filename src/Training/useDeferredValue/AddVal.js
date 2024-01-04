import React, { useState } from 'react'
import PropTypes from 'prop-types'
import List from './List'

function AddVal(props) {
    const [input, setInput] = useState("")
    function handleChange(e) {
        setInput(e.target.value)
    }
  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <List input={input} />
    </div>
  )
}

AddVal.propTypes = {

}

export default AddVal

