
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Login';
import UserDetail from '../components/UserDetail';
import RequireAuth from '@auth-kit/react-router/RequireAuth'
import Prova from '../components/Prova';
import Prova2 from '../components/Prova2';


function RoutesComponent(){

   
    return (
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/prova2' element={<Prova2/>}/>
        <Route
        path="/user-detail"
        element={
          <RequireAuth fallbackPath="/">
            <UserDetail />
          </RequireAuth>
        }
      />
        <Route
        path="/prova"
        element={
          <RequireAuth fallbackPath="/">
            <Prova />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
)
}

export default RoutesComponent;
