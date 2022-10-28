import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
// import DetailsPage from './components/detailsPage/DetailsPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/country/:name" element={<DetailsPage />} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;
