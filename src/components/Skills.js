import React from 'react';

const Skills = () => {
  return (
    <section className="services" id="services">
      <div className="skill">
        <h2>My <span>Skills</span></h2>
        <li><h3>HTML / CSS</h3>
          <span className="bar"><span className="html"></span></span>
        </li>
        <li><h3>JavaScript</h3>
          <span className="bar"><span className="javascript"></span></span>
        </li>
        <li><h3>C Programming</h3>
          <span className="bar"><span className="c"></span></span>
        </li>
        <li><h3>C#</h3>
          <span className="bar"><span className="csharp"></span></span>
        </li>
        <li><h3>Python</h3>
          <span className="bar"><span className="python"></span></span>
        </li>
        <li><h3>Mobile Development</h3>
          <span className="bar"><span className="mobiledev"></span></span>
        </li>
      </div>
    </section>
  );
};

export default Skills;
