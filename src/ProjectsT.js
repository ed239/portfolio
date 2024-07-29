import React, { useState } from 'react';
import { useEffect } from 'react';
import './ProjectsT.css'; // Import your CSS file or define styles here
const projects2 = [
    {
      title: 'Stock Price Prediction',
      description: 'Algorithm comparison analysis used to predict stock prices while optimizing accuracy and efficiency.  ',
      details: 'The paper investigates the effectiveness of four machine learning models (LSTM, XGBRegressor, Linear regression, and SVR) in predicting individual stock prices, considering their crucial role in major market indices like S&P 500 and Dow Jones.' +
        'The study focuses on evaluating the models effectiveness based on RMSE and MAE metrics, discovering that the XGBRegressor model excels in accuracy, while linear regression stands out for efficiency, emphasizing the optimization of training data for precise stock price predictions.',
      key:'Language: Python' ,
      link: 'https://github.com/ed239/StockPricePrediction/blob/main/Stock%20Price%20Prediction-%20Dataset%20Size%20Driven%20Analysis.pdf',
    },
    {
        title: 'iOS Agile Meeting App',
        description: 'App used to keep track of scrum meeting infomration, time, and participant speaking time',
        details: 'Using Swift, the application allows users to schedule, track, and conduct scrum meetings efficiently. The app also provides the ability to transcribe the verbal content of the meeting and store it in history.',
        key:'Key Technologies: SwiftUI, XCode, Combine Framework' ,
        features:'Features: Interactive UI, Asynchronous, Accessible and Inclusive, Data Management and Storage ',
        link: 'https://github.com/ed239',
      },
      {
        title: 'E-Learning Website',
        description: 'Website to access and register for sample Agile courses. Simulates E-learning websites such as Udemy. ',
        details: 'React website with backend using jQuery. The websites provides users information about the sample company, the services and provides the opportunity to sign up.',
        key:'Key Technologies: React, jQuery, JavaScript, Python' ,
        link: 'https://github.com/ed239/AgileWebsiteApp',
      },
      {
        title: 'Portfolio Website',
        description: 'Interactive react website about me to display education, experience, and relevant projects in detail.',
        details:'A website providing detailed information about my education, skills, previous work expereince in the professional, research, and leadership atmospheres, along with significant projects. ',
        key:'Key Technologies: React, JavaScript' ,
        link: 'edendubrovsky.onrender.com',
      },

  ];
  
  const ProjectsT = () => {
    const [selectedProject2, setselectedProject2] = useState(null);
    const [popupVisible, setPopupVisible] = useState(false);
    
    const scrollProjects = (direction) => {
        const projectList = document.querySelector('.project-list-custom');
        const scrollAmount = direction === 'left' ? -200 : 200;
        projectList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      };

      const [windowWidth, setWindowWidth] = useState(window.innerWidth);

      const handleMoreInfoClick = (index) => {
        setselectedProject2(index);
        setPopupVisible(true);
      };
    
      const handleClosePopup = () => {
        setselectedProject2(null);
        setPopupVisible(false);
        
      };

      useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);


        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      useEffect(() => {
        const handleOverlayClick = (event) => {
          if (popupVisible && event.target.classList.contains('popup-overlay')) {
            handleClosePopup();
          }
        };

        window.addEventListener('click', handleOverlayClick);

        return () => {
          window.removeEventListener('click', handleOverlayClick);
        };
      }, [popupVisible]);
    
  
    return (
    <body style={{ backgroundColor: '#e49a65' }}>
    {windowWidth > 960 ? (
    <div className="twoBody">
      <div className="projects-container-custom">
        <div className="arrow-button left-arrow" onClick={() => scrollProjects('left')}>
            {'<'}
        </div>
        <div className="project-list-custom" >
          {projects2.map((project, index) => (
            <div
              key={index}
              className="project-box-custom"
              onMouseEnter={() =>setselectedProject2(index)}
              onMouseLeave={() => setselectedProject2(null)}
            >
              <h3 className="notHoverTitle">{project.title}</h3>
              <p className="notHoverp">{project.description}</p>
              <a className="notHovera"href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
        <div className="arrow-button right-arrow" onClick={() => scrollProjects('right')}>
            {'>'}
        </div>
  
        <div className="project-details-custom">
          {selectedProject2 === null && (
            <div className="project-box-placeholder-custom">
              <h2>Hover over a project</h2>
            </div>
          )}
          {selectedProject2 !== null && (
            <div className="detailed-box-custom">
              <h2>{projects2[selectedProject2].title}</h2>
              <p>{projects2[selectedProject2].details}</p>
              <p>{projects2[selectedProject2].key}</p>
              <p>{projects2[selectedProject2].features}</p>
            </div>
          )}
        </div>
  
        
        </div>
      </div>
    ):(
      
      <div className="mobileBody">
        <div className = "title"><h1>Projects</h1></div>
        <div className="projectSection" >
          {projects2.map((project, index) => (
            <div
              key={index}
              className={`prediction-box ${index === projects2.length - 1 ? 'last-box' : ''}`}>
            <div className="left">
                <h3>{project.title}</h3>
            </div>
              <div className="right-section">
                <div className="button more-info" onClick={() => handleMoreInfoClick(index)}>More Info</div>
                <a className="button view-project" href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
              </div>
            </div>
          ))}
        </div>
        {selectedProject2 !== null && popupVisible && (
        <div className="popup-overlay">
          <div className="popup-window">
            <h3 className="close" onClick={handleClosePopup}>X</h3>
            <h2 className="popTitle">{projects2[selectedProject2].title}</h2>
            <p>{projects2[selectedProject2].details}</p>
            <p>{projects2[selectedProject2].key}</p>
            <p>{projects2[selectedProject2].features}</p>
          </div>
        </div>
      )}

      </div>
    )}
    </body>
    );
  };
  
  export default ProjectsT;