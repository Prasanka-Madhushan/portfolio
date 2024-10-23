import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section className="Projects" id="Projects">
      <h2 className="heading">Latest <span>Projects</span></h2>
      <div className="Projects-container">
        <div className="Projects-box">
          <img src="https://i.ibb.co/x7KF3fr/signsavy.jpg" alt="SignSavvy" />
          <div className="Projects-layer">
            <h4>Sign Savvy</h4>
            <p><b>Technologies Used:</b> <br></br>Flutter, Firebase, ML
            </p>
            <a href="https://github.com/Prasanka-Madhushan/Sign-Language-recognition.git" className="github-icon" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
        <div className="Projects-box">
          <img src="https://i.ibb.co/sFS7V58/dental.jpg" alt="Dental Website" />
          <div className="Projects-layer">
            <h4>Dental Website</h4>
            <p><b>Technologies Used:</b> <br></br>React.js, Tailwind.css, Node.js, MongoDB
            </p>
            <a href="https://github.com/Prasanka-Madhushan/Dental-Appointment-Booking-Website.git" className="github-icon" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
        <div className="Projects-box">
          <img src="https://i.ibb.co/0cPmsbW/py.jpg" alt="CRUD Functionality" />
          <div className="Projects-layer">
            <h4>CRUD Functionality</h4>
            <p><b>Technologies Used:</b> <br></br>HTML, CSS, EJS, Node.js, MongoDB
            </p>
            <a href="https://github.com/Prasanka-Madhushan/CRUD-Application.git" className="github-icon" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
        <div className="Projects-box">
          <img src="https://i.ibb.co/0jLWTk1/market.jpg" alt="Market System" />
          <div className="Projects-layer">
            <h4>Market System</h4>
            <p><b>Technologies Used:</b> <br></br>C#
            </p>
            <a href="https://github.com/Prasanka-Madhushan/Market_System.git" className="github-icon" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
        <div className="Projects-box">
          <img src="https://i.ibb.co/4pwQ04j/hospital.jpg" alt="Hospital Website" />
          <div className="Projects-layer">
            <h4>Hospital Website</h4>
            <p><b>Technologies Used:</b> <br></br>React.js, Tailwind.css, Node.js, MongoDB
            </p>
            <a href="https://github.com/Prasanka-Madhushan/Hospital-Management-System.git" className="github-icon" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
        <div className="Projects-box">
          <img src="https://i.ibb.co/cQ9wqBQ/burger.jpg" alt="Burger Hut Website" />
          <div className="Projects-layer">
            <h4>Burger Hut Website</h4>
            <p><b>Technologies Used:</b> <br></br>HTML, CSS
            </p>
            <a href="https://github.com/Prasanka-Madhushan/BurgerHut-Website.git" className="github-icon" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
        <div className="Projects-box">
          <img src="https://i.ibb.co/74MftNC/weather.jpg" alt="Weatherapp" />
          <div className="Projects-layer">
            <h4>Weather App</h4>
            <p><b>Technologies Used:</b> <br></br>HTML, CSS, JS
            </p>
            <a href="https://github.com/Prasanka-Madhushan/weatherapp.git" className="github-icon" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
        <div className="Projects-box">
          <img src="https://i.ibb.co/483LR6m/Mouse.jpg" alt="Eye Control Mouse Pointer" />
          <div className="Projects-layer">
            <h4>Eye Mouse Pointer</h4>
            <p><b>Technologies Used:</b> <br></br>Python
            </p>
            <a href="https://github.com/Prasanka-Madhushan/Eye_Control_Mouse_Pointer.git" className="github-icon" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
        <div className="Projects-box">
          <img src="https://i.ibb.co/m6g4H6J/cal.jpg" alt="Python" />
          <div className="Projects-layer">
            <h4>Calculator</h4>
            <p><b>Technologies Used:</b> <br></br>Python
            </p>
            <a href="https://github.com/Prasanka-Madhushan/Calculator.git" className="github-icon" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
