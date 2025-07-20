import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{
      padding: '10px',
      background: '#eee',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: '20px',
      position: 'relative',
    }}>
      {/* Hamburger on left */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ fontSize: '20px', cursor: 'pointer' }}
      >
        ☰
      </button>

      {/* Always visible Home link */}
      <Link to="/" style={{ fontWeight: 'bold' }}>Home</Link>

      {/* Dropdown menu (right under hamburger) */}
      {isOpen && (
        <div style={{
          position: 'fixed',
           zIndex: 2,   
          top: '45px',
          left: '10px',
        //   background: '#fff',
            background: 'transparent',  
        //   boxShadow: '0px 0px 5px gray',
          padding: '10px',
          borderRadius: '5px',
        }}>
  <ul style={{ listStyle: 'none', padding: 0 }}>
 
  <li><Link to="/Todo">TodoApp</Link></li>
  <li><Link to="/Bmi">Bmi</Link></li>
  <li><Link to="/Feedback">Feedback</Link></li>
</ul>    
        </div>
      )}
    </nav>
  );
}

export default Navbar;
