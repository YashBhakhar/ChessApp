import React,{useState, useMemo} from 'react'
import PropTypes from 'prop-types'

function Memop(props) {
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(20)
    const multiply = useMemo(() => {
        console.log("h")
        return num*10
    },[num])
  return (
    <div>
    <h1>{multiply}</h1>
        <button onClick={()=> setNum(num + 1)}>Add</button>
        <h1>{num}</h1>
        <button onClick={() => setNum2(num2 - 1) }>Sub</button>
        <h1>{num2}</h1>
     </div>
  )
}

Memop.propTypes = {

}

export default Memop

