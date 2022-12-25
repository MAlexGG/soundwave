import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Discover from '../pages/discover/Discover';
import Join from '../pages/join/Join';

function Router() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<App />} />
              <Route path='/discover' element={<Discover />} />
              <Route path='/join' element={<Join />} />
          </Routes>
      </BrowserRouter>
  )
}

export default Router