import React, {useState, memo} from 'react'
import PropTypes from 'prop-types'
import Second from './Second';

function First(learning) {
  console.log("s")
    const [count,setCount] = useState(0)
    function handleClick () {
      console.log(count)
      setCount(c => c + 1)
      setCount(c => c + 2)
      setCount(c => c + 3)
      console.log(count)
    }
  return (
 
    <div>
    <hr />
    <button onClick={handleClick} >Add</button>
      first 
      <Second count={count} />
    </div>
  )
}

First.propTypes = {

}

export default memo(First)

