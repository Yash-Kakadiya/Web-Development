import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App';
import Home from './Components/Home';
import LogIn from './Components/Login';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';
import Hooks from './Components/Hooks';
import CRUD from './Components/CRUD';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/hooks' element={<Hooks />} />
        <Route path='/crud' element={<CRUD />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
