import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (

  <div> 
  

  <BrowserRouter>
   <Routes>
    <Route path='/' element = {<Home/>}> </Route>
    <Route path='/reg' element = {<Register/>}> </Route>
    <Route path='/' element = {<Home/>}> </Route>
    <Route path='/' element = {<Home/>}> </Route>
    
  
   </Routes>
  </BrowserRouter>

  </div>
  );
}

export default App;
