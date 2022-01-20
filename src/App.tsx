import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.scss';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';

// Routes
import Home from './views/Home/Home';
import MyCocktails from './views/MyCocktails/MyCocktails';
import Search from './views/Search/Search';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-cocktails" element={<MyCocktails />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
