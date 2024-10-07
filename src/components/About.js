import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="https://i.ibb.co/hdDnxSW/profile-pic.png" alt="prasa" />
      </div>
      <div className="about-content">
        <input id="ch" type="checkbox" />
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Undergraduate</h3>
        <p>I'm an enthusiastic undergraduate pursuing a degree in the software industry at NSBM. My interests lie within web development, data science and machine learning.<br />
          Throughout my academic journey I have acquired various programming languages like Javascript, Css, Python, Java, PHP,C# etc. These skills enable me to approach problem-solving with creativity and efficiency.
        </p>
        <div className="about-content2">
          <input id="ch" type="checkbox" />
          <p>As a dedicated learner, I actively seek out opportunities to enhance my programming knowledge and stay up-to-date with industry trends and best practices. 
            I am committed to continuously improving my skills to deliver high-quality solutions.
            <br /><br />
            During my time at NSBM, I have participated in various projects and collaborations that have 
            strengthened my teamwork and communication abilities. 
            I believe effective collaboration is key to delivering successful software solutions.<br /><br />
            In my portfolio, you will find evidence of my programming projects, showcasing my ability to create 
            functional and innovative applications. 
            I am excited to contribute my skills and passion to the software industry and make a positive impact 
            on the world through technology.<br /><br />
            Thank you for considering my portfolio, and I look forward to exploring opportunities that allow me 
            to apply my programming expertise and contribute to the success of your organization.</p>
          <label htmlFor="ch">Show Less</label>
        </div>
        <label htmlFor="ch">Read More</label>
      </div>
    </section>
  );
};

export default About;
