import React from 'react';
import { useState,useEffect } from 'react';
import './Education.css'; // Import your CSS file or define styles here

const Education = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    
    <body className='ed-body'>
    {windowWidth > 960 ? (
        <>
      <div className="container">
      
      <div className="section">
          <h1>Masters of Science, Software Development</h1>
          <h2>Boston University, Metropolitan College</h2>
          <p>GPA: 4.0</p>
          <p>Graduation: December 2024</p>
          <p> Relevant Course Work: Information Structures with Python • Data Structures & Algorithms • Advanced Programming Techniques • Software Design and Patterns • Information Systems Analysis and Design • Agile Software Development
          • Database Design and Implementation</p>
        </div>

        <div className="section">
          <h1>Bachelor of Science, Computer Science</h1>
          <h2>New Jersey Institute of Technology, Albert Dorman Honors College</h2>
          <p>Minors: Data Analytics, Business and Information Systems</p>
          <p>GPA: 3.85</p>
          <p>Graduation: May 2023</p>
          <p> Computing Courses: Foundations of Computer Science I & II• Intensive Programming in Linux • Computer Networks • Data Science • Cybersecurity • Web Mining & Information Retrieval • Computer Systems • Performance Modeling in Computing • Advanced Data Structures and Algorithms • Analysis and Systems Design</p>
          <p> Mathematics Courses: Probability and Statistics, Linear Algebra, Discrete Mathematics</p>
        </div>

        

        <div className="section">
          <h1>Skills</h1>
          <ul>
            <li>Languages: C++, C#, Python, Java, JavaScript, SQL, Swift</li>
            <li>Front-end: React, HTML5, CSS, Bootstrap, Angular </li>
            <li>JavaScript: Node.js, Express.js, jQuery</li>
            <li>SDLC & CI/CD: Agile, Scrum, Git, Github, JIRA</li>
            <li>Related: Microsoft Azure, ServiceNow, and OpenPages</li>
            <li>Strong written and verbal communications</li>
            <li>Fluent in Russian</li>
          </ul>
        </div>
        </div>
        </>
      ) : (
      <div className="container">
        <div className="sectionm">
          <h1 className="degree">Masters of Science, Software Development</h1>
          <h1 className="school" >Boston University, Metropolitan College</h1>
          <p>GPA: 4.0</p>
          <p>Graduation: December 2024</p>
        </div>

        <div className="sectionm">
          <h1 className="degree">Bachelor of Science, Computer Science</h1>
          <h1 className="school" >New Jersey Institute of Technology, Albert Dorman Honors College</h1>
          <p>Minors: Data Analytics, Business and Information Systems</p>
          <p>GPA: 3.85</p>
          <p>Graduation: May 2023</p>
        </div>

        

        <div className="sectionm">
          <h1>Skills</h1>
          <ul>
            <li>Languages: C++, C#, Python, Java, JavaScript, SQL, Swift</li>
            <li>Front-end: React, HTML5, CSS, Bootstrap, Angular </li>
            <li>JavaScript: Node.js, Express.js, jQuery</li>
            <li>SDLC & CI/CD: Agile, Scrum, Git, Github, JIRA</li>
            <li>Related: Microsoft Azure, ServiceNow, and OpenPages</li>
            <li>Strong written and verbal communications</li>
            <li>Fluent in Russian</li>
          </ul>
        </div>
      </div>
      )}
        
      
    </body>
  );
};

export default Education;
