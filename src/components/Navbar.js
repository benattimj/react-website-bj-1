import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
   if (window.innerWidth <= 960) {
     setButton(false);
   } else {
     setButton(true);
   }
 };

 useEffect(() => {
   showButton();
 }, []);

 window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            BJSYS
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sistemas
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Produto
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/Sobre'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sobre
              </Link>
            </li>
            
            
            <li className='nav-item'>
  <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
    <FontAwesomeIcon icon={faUser} />
    Login
  </Link>


  
</li>
<li className='nav-item'>
  <button className='nav-button' onClick={closeMobileMenu}>
    <FontAwesomeIcon icon={faUser} />
    Login
  </button>
</li>


            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;