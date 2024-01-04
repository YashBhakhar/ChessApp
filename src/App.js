import {useEffect, useState, useCallback, useContext} from 'react';
import ChessBoard from './Chess/ChessBoard';
import './App.scss'


function App() {
 
  return (
    <div className='main_top'>
      <ChessBoard />
    </div>
  );
}

export default App;
