import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Missions from './Components/Missions';
import Rockets from './Components/Rockets';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='Missions' element={<Missions />} />
        <Route path='Rockets' element={<Rockets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



