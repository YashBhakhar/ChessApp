import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Child from './Child';

function Parent(props) {
  const [count, setCount] = useState(0);
  const learning = useCallback(() => { 
    console.log(count)
    setCount(count + 1) 
  }, [])
  return (
    <div>
      <button onClick={learning} >add count</button>
      {count}
      <Child count={count}>hello</Child>
    </div>
  )
}

Parent.propTypes = {

}

export default Parent

