import React from 'react'
import PropTypes from 'prop-types'

function Practice(props) {
    
const obj = {
    kitchen: {
        ["gold spoons"]: "900",
        piano:"550",
        notes: "jhsdvchdvhz"
    },
    cellar: {
        reminder: "dog",
        bottle: "650"
    }
}

for(let i in obj) {
    for(let j in obj[i]) {
        console.log(obj[i][j])
    }
}
   
  return (
    <div>
      <h1>{}</h1>
    </div>
  )
}


export default Practice

