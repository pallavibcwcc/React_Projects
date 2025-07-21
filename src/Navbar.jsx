import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown on any link click
  const handleLinkClick = () => setIsOpen(false);

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

  <Link
  to="/"
  onClick={handleLinkClick}
  style={{
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#375E97', 
   
  }}
>
  Home
</Link>

      {/* Dropdown menu */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          zIndex: 2,
          top: '45px',
          left: '10px',
          background: 'transparent',
          padding: '10px',
          borderRadius: '5px',
             
        }}>
          <ul style={{ listStyle: 'none', padding: 0 ,  fontWeight: 'bold',
    fontSize: '1.2rem', }}>
            <li ><Link to="/Todo" onClick={handleLinkClick}  style={{  color: '#375E97'}}>TodoApp</Link></li>
            <li><Link to="/Bmi" onClick={handleLinkClick}  style={{  color: '#375E97'}}>Bmi</Link></li>
            <li><Link to="/Feedback" onClick={handleLinkClick}  style={{  color: '#375E97'}}>Feedback</Link></li>
            <li><Link to="/Formvalidation" onClick={handleLinkClick}  style={{  color: '#375E97'}}>Formvalidation</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
