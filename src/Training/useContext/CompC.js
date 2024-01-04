import React,{useContext, memo} from 'react'
import PropTypes from 'prop-types'
import {Name} from './CompA'

function CompC(props) {
    console.log("c")
    const name = useContext(Name);
  return (
    <div>
      {name}
    </div>
  )
}

CompC.propTypes = {

}

export default CompC

