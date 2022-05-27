import Board from './Dashboard';
import RECOG from './home';
import React from 'react';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Signer from './SignIn';
import Screen from './Login';


function App() {
  return(
    <div className='App'>
  <Router>
    <Routes>
      <Route path='/' element={<RECOG/>} />
      <Route exact path='/home' element={<RECOG />} />
      <Route exact path='/SignIn' element={<Signer />} />
      <Route exact path='/LogIn' element={<Screen />} />
      <Route exact path='/Board' element={<Board/>} />
    </Routes>
  </Router>
    </div>
  )
}

export default App;
