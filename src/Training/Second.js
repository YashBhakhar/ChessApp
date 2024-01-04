import React from 'react'
import PropTypes from 'prop-types'

function Second(props) {
  return (
    <div>
    <hr />
    {props.count}
      Second
    </div>
  )
}

Second.propTypes = {

}

export default Second

