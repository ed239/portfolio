import React, { useState } from 'react';
import { useEffect } from 'react';
import './ProjectsT.css'; // Import your CSS file or define styles here
const projects2 = [
    {
      title: 'Published iOS App',
      description: 'Language App on AppStore - used to learn common Hebrew verbs with flashcards and quiz. ',
      details: 'Published swift application on Apple AppStore with over 100 most common Hebrew verbs. Each verb displays all conjugations and gives the user the ability to learn using flashcards and a written quiz option.',
      key:'Key Technologies: Swift, User Default Data, Data Persistency, Data Encoding and Decoding' ,
      link: 'https://learnhebrewverbs.onrender.com',
    },
    {
      title: 'Java Chat App',
      description: 'Created a JavaFx Chat Application called BUBuddy for Boston University students using MongoDB.  ',
      details: 'BUBudy allows users to create an account and chat with other Boston University students. It has 2 features: a local chat (for students on the same network as the server) and a main chat: where location does not matter. In the main chat, message history is stored while on the local chat it is removed once you exit the chat.',
      key:'Key Technologies: Java, JavaFx, MongoDB, Authentication' ,
      features: 'Features: Password Encryption, Server Client Networking',
      link: 'https://github.com/ed239/BUBuddy',
    },
    {
      title: 'Stock Price Prediction',
      description: 'Algorithm comparison analysis used to predict stock prices while optimizing accuracy and efficiency.  ',
      details: 'The paper investigates the effectiveness of four machine learning models (LSTM, XGBRegressor, Linear regression, and SVR) in predicting individual stock prices, considering their crucial role in major market indices like S&P 500 and Dow Jones.' +
        'The study focuses on evaluating the models effectiveness based on RMSE and MAE metrics, discovering that the XGBRegressor model excels in accuracy, while linear regression stands out for efficiency, emphasizing the optimization of training data for precise stock price predictions.',
      key:'Language: Python' ,
      link: 'https://github.com/ed239/StockPricePrediction/blob/main/Stock%20Price%20Prediction-%20Dataset%20Size%20Driven%20Analysis.pdf',
    },
    {
      title: 'E-Learning Website',
      description: 'Website to access and register for sample Agile courses. Simulates E-learning websites such as Udemy. ',
      details: 'React website with backend using jQuery. The websites provides users information about the sample company, the services and provides the opportunity to sign up.',
      key:'Key Technologies: React, jQuery, JavaScript, Python' ,
      link: 'https://github.com/ed239/AgileWebsiteApp',
    },
    {
        title: 'iOS Agile Meeting App',
        description: 'App used to keep track of scrum meeting infomration, time, and participant speaking time',
        details: 'Using Swift, the application allows users to schedule, track, and conduct scrum meetings efficiently. The app also provides the ability to transcribe the verbal content of the meeting and store it in history.',
        key:'Key Technologies: SwiftUI, XCode, Combine Framework' ,
        features:'Features: Interactive UI, Asynchronous, Accessible and Inclusive, Data Management and Storage ',
        
      },
      {
        title: 'iOS Chat App',
        description: 'Chat Application between iPhone users with accounts on the platform.',
        details: 'Application that allows users to create and account and stores accounts in Firebase. Users can chat with other users of the application by sending direct messages. All messages are stored in Firebase',
        key:'Key Technologies: Swift, Firebase' ,
        
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
              <div className="projects-container-custom2">
                <div className="project-list-custom">
                  {projects2.map((project, index) => (
                    <div key={index} className="project-box-custom" onClick={() => handleMoreInfoClick(index)}>
                      <h3 className="notHoverTitle">{project.title}</h3>
                      <p className="notHoverp">{project.description}</p>
                      <div className="notHoverInfo" onClick={() => handleMoreInfoClick(index)}>More Info</div>
                      {project.link && (
                        <a className="notHovera" href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {selectedProject2 !== null && popupVisible && (
                <div className="popup-overlay">
                  <div className="popup-window">
                    <h3 className="close" onClick={handleClosePopup}>X</h3>
                    <h2 className="popTitle">{projects2[selectedProject2].title}</h2>
                    <p>{projects2[selectedProject2].details}</p>
                    <p><strong>{projects2[selectedProject2].key}</strong></p>
                    {projects2[selectedProject2].features && <p>{projects2[selectedProject2].features}</p>}
                    {projects2[selectedProject2].link && (
                      <a href={projects2[selectedProject2].link} target="_blank" rel="noopener noreferrer">View Project</a>
                    )}
                  </div>
                  </div>
               
              )}
            </div>
          ) : (
            <div className="mobileBody">
              <div className="title"><h1>Projects</h1></div>
              <div className="projectSection">
                {projects2.map((project, index) => (
                  <div key={index} className={`prediction-box ${index === projects2.length - 1 ? 'last-box' : ''}`}>
                    <div className="left">
                      <h3>{project.title}</h3>
                    </div>
                    <div className="right-section">
                      <div className="button more-info" onClick={() => handleMoreInfoClick(index)}>More Info</div>
                      {project.link && (
                        <a className="button view-project" href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {selectedProject2 !== null && popupVisible && (
                <div className="popup-overlay">
                  <div className="popup-window2">
                    <h3 className="close" onClick={handleClosePopup}>X</h3>
                    <h2 className="popTitle">{projects2[selectedProject2].title}</h2>
                    <p>{projects2[selectedProject2].details}</p>
                    <p><strong>{projects2[selectedProject2].key}</strong></p>
                    {projects2[selectedProject2].features && <p>{projects2[selectedProject2].features}</p>}
                    {projects2[selectedProject2].link && (
                      <a href={projects2[selectedProject2].link} target="_blank" rel="noopener noreferrer">View Project</a>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </body>
      );
    };
    
    export default ProjectsT;
  
  //   return (
  //   <body style={{ backgroundColor: '#e49a65' }}>
  //   {windowWidth > 960 ? (
  //   <div className="twoBody">
  //     <div className="projects-container-custom2">
  //       <div className="project-list-custom">

  //       <div className="project-box-custom">
  //           <h3 class="notHoverTitle">Published iOS App </h3> 
  //           <p class="notHoverp">Language App on AppStore - used to learn common Hebrew verbs with flashcards and quiz.</p>
  //           <div class="notHoverInfo">More Info</div>
  //           <a class="notHovera" href="https://apps.apple.com/us/app/learn-hebrew-common-verbs/id6497066646" target="_blank" rel="noopener noreferrer">View Project</a>
  //       </div>
        


  //       </div>
       
  
        
  //       </div>
  //     </div>
  //   ):(
      
  //     <div className="mobileBody">
  //       <div className = "title"><h1>Projects</h1></div>
  //       <div className="projectSection" >
  //         {projects2.map((project, index) => (
  //           <div
  //             key={index}
  //             className={`prediction-box ${index === projects2.length - 1 ? 'last-box' : ''}`}>
  //           <div className="left">
  //               <h3>{project.title}</h3>
  //           </div>
  //             <div className="right-section">
  //               <div className="button more-info" onClick={() => handleMoreInfoClick(index)}>More Info</div>
  //               <a className="button view-project" href={project.link} target="_blank" rel="noopener noreferrer">
  //               View Project
  //             </a>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //       {selectedProject2 !== null && popupVisible && (
  //       <div className="popup-overlay">
  //         <div className="popup-window">
  //           <h3 className="close" onClick={handleClosePopup}>X</h3>
  //           <h2 className="popTitle">{projects2[selectedProject2].title}</h2>
  //           <p>{projects2[selectedProject2].details}</p>
  //           <p>{projects2[selectedProject2].key}</p>
  //           <p>{projects2[selectedProject2].features}</p>
  //         </div>
  //       </div>
  //     )}

  //     </div>
  //   )}
  //   </body>
  //   );
  // };
  
  // export default ProjectsT;