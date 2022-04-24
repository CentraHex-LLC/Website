import React from 'react';
import LandingPage from 'LandingPage';
import NotFoundPage from 'NotFoundPage';
import 'style/App.css';
import 'style/main.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App is-preload'>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
