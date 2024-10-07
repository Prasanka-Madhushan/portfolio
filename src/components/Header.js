import React, { useEffect } from 'react';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  useEffect(() => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const themeBtn = document.querySelector('.theme-btn');
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('header nav a');
    const sections = document.querySelectorAll('section');

    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x-circle');
      navbar.classList.toggle('active');
    };

    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
    });

    const handleScroll = () => {
      let scrollY = window.scrollY;
      
      sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (scrollY >= offset && scrollY < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
          });
        }
      });

      header.classList.toggle('sticky', scrollY > 100);
      menuIcon.classList.remove('bx-x-circle');
      navbar.classList.remove('active');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <a href="#" className="logo">Port<span>folio..</span></a>
      <i className='bx bx-menu' id="menu-icon"></i>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Skills</a>
        <a href="#Projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="theme-btn">
        <i className='bx bx-bulb'></i>
      </div>
    </header>
  );
};

export default Header;
