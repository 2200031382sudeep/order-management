import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Orders from './pages/Orders';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Orders />
    </div>
  );
}

export default App;
