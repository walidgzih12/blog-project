import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './home/home'
import SignUp from './signup/signup'
import Login from './login/login';


import './App.css';

function App() {
  return (
  <BrowserRouter>

    <Routes>
      <Route path='/home' element={<Home/>}> </Route>
      <Route path='/signup' element={<SignUp/>}> </Route>
      <Route path='/login' element={<Login/>}> </Route>
    </Routes>

  </BrowserRouter>


  );
}

export default App;
    
