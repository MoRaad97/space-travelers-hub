import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { loadRocketsThunk } from './Redux/Rockets/Rockets';
import { loadMissionsThunk } from './Redux/Missions/Missions';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Missions from './Components/Missions';
import Rockets from './Components/Rockets';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRocketsThunk());
    dispatch(loadMissionsThunk());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="Missions" element={<Missions />} />
        <Route path="Rockets" element={<Rockets />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
