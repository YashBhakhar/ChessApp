import React, { memo } from 'react'
import PropTypes from 'prop-types'
import CompC from './CompC'
import { Name } from './CompA'

function CompB(props) {
    console.log("B")
  return (
    <div>
    <Name.Provider value={"raj"}><CompC /></Name.Provider>
      
    </div>
  )
}

CompB.propTypes = {

}

export default CompB

