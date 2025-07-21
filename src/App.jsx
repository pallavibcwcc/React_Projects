import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Feedback from './pages/Feedback'
import Todo from './pages/todo';
import Bmi from './pages/Bmi'
import Formvalidation from './pages/Formvalidation'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
         <Route path="/Todo" element={<Todo />} />
         <Route path="/Bmi" element={<Bmi />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/Formvalidation" element={<Formvalidation/>} />
      </Routes>
    </>
  );
}

export default App;
