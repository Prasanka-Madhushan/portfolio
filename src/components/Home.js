import React from 'react';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hola!, It's Me</h3>
        <h1>Prasanka Madhushan</h1>
        <h3>I'm a <span className="multiple-text"></span></h3>
        <p>“I’m not a great programmer,<br />I’m just a good programmer with great habits.”.</p>
        <div className="social-media">
          <a href="www.linkedin.com/in/prasanka-madhushan"><i className='bx bxl-linkedin-square'></i></a>
          <a href="#"><i className='bx bxl-facebook'></i></a>
          <a href="#"><i className='bx bxl-instagram-alt'></i></a>
          <a href="https://github.com/Prasanka-Madhushan"><i className='bx bxl-github'></i></a>
        </div>
        <a href="CV/PrasaCV.pdf" className="btn">Download CV</a>
      </div>
      <div className="home-img">
        <img src="https://i.ibb.co/hdDnxSW/profile-pic.png" alt="prasa" />
      </div>
    </section>
  );
};

export default Home;
