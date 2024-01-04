import React, { useImperativeHandle, useRef } from "react";
import PropTypes from "prop-types";
import './style.css';

function Model2({ isOpen, onClose }, ref) {
    const closeRef = useRef()
    const denyRef = useRef()
    const confirmRef = useRef()

    useImperativeHandle(ref, () => {
        return {
            focusCloseBtn: () => closeRef.current.focus(),
            focusDenyBtn: () => denyRef.current.focus(),
            focusConfirmBtn: () => confirmRef.current.focus(),
        }
    })

  if (!isOpen) return null;


  return (
    <div className="Mydiv">
      <button onClick={onClose} ref={closeRef}>&times;</button>
      <div>
        <h1>Title</h1>
      </div>
      <div>
      Do you Confirm?
      </div>
      <div>
      <button ref={confirmRef} onClick={onClose}>Yes</button>
      <button ref={denyRef} onClick={onClose}>No</button>
      </div>
    </div>
  );
}

Model2.propTypes = {};

export default React.forwardRef(Model2);

