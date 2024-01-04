import React, { useDeferredValue, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'

function List({input}) {
    const deferInput = useDeferredValue(input)
    const List_size = 20000
    const list = useMemo(() => {
        const l = []
        for (let i = 0; i < List_size; i++) {
            l.push(<div key={i}>{deferInput}</div>)
        }
        return l
    },[deferInput])

    useEffect(() =>{
        console.log(`Input: ${input} \n Deferred : ${deferInput}`)
    },[input, deferInput])
  return list
}

List.propTypes = {

}

export default List

