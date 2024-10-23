import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Backend Developer",
      company: "LiveRoom Technologies",
      period: "June 2024 - Present",
      description: [
        "Developing and maintaining scalable web applications using React.js and other modern web technologies.",
        "Collaborating closely with designers, product managers, and engineering teams to deliver high-quality user experiences.",
        "Implementing responsive designs that ensure seamless functionality across a wide range of devices and platforms.",
        "Ensuring cross-browser compatibility and optimizing performance for various browsers.",
        "Participating in code reviews, sharing best practices, and providing constructive feedback to improve code quality and team efficiency."
      ]
    },
    {
      role: "MERN-Stack Developer",
      company: "LiveRoom Technologies",
      period: "June 2024 - Present",
      description: [
        "Develop and manage both client-side and server-side components using the MERN stack (React for front-end, Node.js and Express for backend, MongoDB for database).",
        "Ensure that the platform is scalable and high-performance while maintaining excellent code quality.",
        "Collaborate with cross-functional teams to define, design, and ship new features."
      ]
    },
    {
        role: "Frontend Developer",
        company: "LiveRoom Technologies",
        period: "June 2024 - Present",
        description: [
          "Developing and maintaining scalable web applications using React.js and other modern web technologies.",
          "Collaborating closely with designers, product managers, and engineering teams to deliver high-quality user experiences.",
          "Implementing responsive designs that ensure seamless functionality across a wide range of devices and platforms.",
          "Ensuring cross-browser compatibility and optimizing performance for various browsers.",
          "Participating in code reviews, sharing best practices, and providing constructive feedback to improve code quality and team efficiency."
        ]
      },
  ];

  return (
    <div className="experience-section">
      {/* <h2 className="section-title">What I Have Done So Far</h2> */}
      {/* <h3 className="work-experience-title">Work Experience.</h3> */}
      <h2 className="heading">Work <span>Experience</span></h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="experience-box">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <ul>
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
            <div className="timeline-date">{exp.period}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
