import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

function ModalExaple(props) {
    const [show,setShow] = useState(false)
    const popup = useRef()
    const button = useRef()

    useEffect(() => {
        if (popup.current == null || button.current == null ) return
            const {bottom} = button.current.getBoundingClientRect()
            popup.current.style.top = `${bottom + 25}px`
    }, [show])


  return (
    <div>
      <button ref={button} onClick={() => setShow(prev => !prev)}>Click hear</button>
      {
        show && (
            <div style={{position : "absolute"}} ref={popup} >This is popup</div>
        )
      }
    </div>
  )
}

ModalExaple.propTypes = {

}

export default ModalExaple

