import React,{useState} from 'react'
import PropTypes from 'prop-types'

function Addtask({addTask}) {
    const [text, setText] = useState('')
  return (
    <div>
      <input placeholder='Add task' value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => {setText(''); addTask(text)}} >Add</button>
    </div>
  )
}

Addtask.propTypes = {

}

export default Addtask

