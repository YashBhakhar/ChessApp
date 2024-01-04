import React from 'react'

export const ChessBlock = ({i, data, onActive}) => {
  // debugger
  return (
    <button className={(i%2 === 0 ? 'odd_piece' : 'even_piece') + (data.active ? ' active' : '') + (data.piece ? ' cursor' : '')} onClick={()=>onActive(data)} >
      {!data.piece && <p>x:{data.x} , y:{data.y}, id:{data.id}</p>}
        <img src={data.piece?.image} className='chess_image' />
    </button>
  )
}
