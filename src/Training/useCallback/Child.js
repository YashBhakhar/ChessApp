import React,{memo} from 'react'
import PropTypes from 'prop-types'

function Child({count, children}) {
    console.log("count")
  return (
    <div>
       {children}
    </div>
  )
}

Child.propTypes = {

}

export default memo(Child)

