import React from 'react';

const Projects = () => {
  return (
    <section className="Projects" id="Projects">
      <h2 className="heading">Latest <span>Projects</span></h2>
      <div className="Projects-container">
        <div className="Projects-box">
          <img src="https://i.ibb.co/GPnnp2R/web.jpg" alt="web" />
          <div className="Projects-layer">
            <h4>Web Design</h4>
            <p>This is my first web design which is created by myself.
              I have used HTML, Css, JavaScript to do the coding of this Website.
            </p>
            <a href="#"><i className='bx bx-link-external'></i></a>
          </div>
        </div>
        <div className="Projects-box">
          <img src="https://i.ibb.co/8KtMrJd/mobile.jpg" alt="mobile" />
          <div className="Projects-layer">
            <h4>Mobile Design</h4>
            <p>This is my first Mobile Application which is created by myself.
              I have used Java to do the coding of this application.
            </p>
            <a href="#"><i className='bx bx-link-external'></i></a>
          </div>
        </div>
        <div className="Projects-box">
          <img src="https://i.ibb.co/1JfWrrH/c.jpg" alt="C#" />
          <div className="Projects-layer">
            <h4>C# Design</h4>
            <p>This is my first C# Project which is created by myself.
              I have used C# Programming language to do the coding of this application.
            </p>
            <a href="https://github.com/Prasanka-Madhushan/Market_System"><i className='bx bx-link-external'></i></a>
          </div>
        </div>
        <div className="Projects-box">
          <img src="https://i.ibb.co/qDY7S9J/java.jpg" alt="java" />
          <div className="Projects-layer">
            <h4>Java Design</h4>
            <p>This is my first Java Project which is created by myself.
              I have used Java Programming language to do the coding of this application.
            </p>
            <a href="#"><i className='bx bx-link-external'></i></a>
          </div>
        </div>
        <div className="Projects-box">
          <img src="https://i.ibb.co/0cPmsbW/py.jpg" alt="Python" />
          <div className="Projects-layer">
            <h4>Phython Design</h4>
            <p>This is my first Python Project which is created by myself.
              I have used python programming language to do the coding of this application.
            </p>
            <a href="https://github.com/Prasanka-Madhushan/Calculator.git"><i className='bx bx-link-external'></i></a>
          </div>
        </div>
        <div className="Projects-box">
          <img src="https://i.ibb.co/dBxSwR0/react.jpg" alt="react" />
          <div className="Projects-layer">
            <h4>React Design</h4>
            <p>This is my first React Project which is created by myself.
              I have used HTML, Css, JavaScript to do the coding of this application.
            </p>
            <a href="#"><i className='bx bx-link-external'></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
