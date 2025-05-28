import React from 'react';
import { Routes, Route } from 'react-router-dom'; // 👈 Importa rutas
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/home/home';
import Product from './pages/product/product';
import Employees from './pages/emplooyes/employees';
import Branch from './pages/branches/branches';

import './App.css';
import '@fontsource/quicksand';
import '@fontsource/quicksand/400.css';
import '@fontsource/quicksand/700.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Product />} />
          <Route path="/empleados" element={<Employees />} />
          <Route path="/sucursales" element={<Branch />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
