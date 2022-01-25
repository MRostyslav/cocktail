import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';

// Routes
import Home from './views/Home/Home';
import MyCocktails from './views/MyCocktails/MyCocktails';
import Search from './views/Search/Search';
import CocktailView from './views/CocktailView/CocktailView';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__layoute">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-cocktails" element={<MyCocktails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cocktail/:id" element={<CocktailView />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
