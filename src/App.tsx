import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Post from './components/Post';
import Profile from './components/Profile';
import Signin from './components/Signin';
import Home from './components/Home';
import './App.css';

const App = (): JSX.Element =>{
  return(
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/post" element={<Post />} />
      <Route path="/profile" element={<Profile />} />
      <Route path = "/Signin" element={<Signin />} />
      <Route path="*" element={<h2>Page not found</h2>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
