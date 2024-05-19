import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import SignIn from './components/SignIn';

function App() {
  return (

  <div> 
  

  <BrowserRouter>
   <Routes>
    <Route path='/' element = {<Home/>}> </Route>
    <Route path='/register' element = {<Register/>}> </Route>
    <Route path='/signin' element = {<SignIn/>}> </Route>
    <Route path='/' element = {<Home/>}> </Route>
    
  
   </Routes>
  </BrowserRouter>

  </div>
  );
}

export default App;
