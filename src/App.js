import React, { useState } from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import {Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Users from './Pages/Users';
import Login from './Pages/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Admin from './Pages/Admin'
import Profile from './Pages/Profile';
import Errors from './Pages/Errors'
function App() { 
  const [isAuth, setIsAuth] = useState (false);
  return (
    <div className="App">
      <NavBar/>
      <h1>WorkShop API</h1>

      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/users' element={<Users />} />
      <Route path='/login' element={<Login />} />
      
      <Route path='/admin' element={<PrivateRoute isAuth={isAuth} />} >
          <Route path='/admin' element={<Admin />} />
        </Route> 
        <Route path='/*' element={<Errors />} />
        <Route path='/user/:id' element={<Profile />} />


      </Routes>
      
    </div>
  );
}

export default App;
