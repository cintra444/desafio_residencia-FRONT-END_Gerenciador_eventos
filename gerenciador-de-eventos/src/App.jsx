import React from 'react';
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';
import './App.css';
export default function App() {
  return (

    <div className="App">
      <Navbar />
      <div className='main-content'>
        <AppRoutes />
      </div>
      <Footer />
    </div>

  );
}
