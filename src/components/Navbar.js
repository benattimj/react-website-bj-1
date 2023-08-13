import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import LoginModal from './LoginModal';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const modalRef = useRef();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };


  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

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

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeLoginModal();
        window.scrollTo(0, 0);
      }
    };

    if (isLoginModalOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isLoginModalOpen]);

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
                Contato
              </Link>
            </li>



            <li className='nav-item'>
            <button onClick={() => openLoginModal()} className='align-right'>
              Login
            </button>
            <LoginModal
              isOpen={isLoginModalOpen}
              onRequestClose={closeLoginModal}
            />

            
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