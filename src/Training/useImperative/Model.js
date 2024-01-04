import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Model2 from './Model2'

function Model(props) {
    const [open, setOpen] = useState(false)
    const modalRef = useRef()
    return (
    <div>
      <button onClick={() => setOpen(true)}>Open</button>
      <button onClick={() => modalRef.current.focusCloseBtn()}>Focus Close</button>
      <button onClick={() => modalRef.current.focusConfirmBtn()}>Focus Confirm</button>
      <button onClick={() => modalRef.current.focusDenyBtn()}>Focus Deny</button>
      <Model2 ref={modalRef} isOpen={open} onClose = {() => setOpen(false)} />
    </div>
  )
}

Model.propTypes = {

}

export default Model

