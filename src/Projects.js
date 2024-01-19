// import React, { useState } from 'react';
// import './Projects.css'; // Import your CSS file or define styles here


// const projects = [
//   {
//     title: 'Stock Price Prediction Algorithm Comparison2',
//     description: 'Analysis on stock price prediction ',
//     details: 'The paper investigates the effectiveness of four machine learning models (LSTM, XGBRegressor, Linear regression, and SVR) in predicting individual stock prices, considering their crucial role in major market indices like S&P 500 and Dow Jones.' +
//     'The study focuses on evaluating the models effectiveness based on RMSE and MAE metrics, discovering that the XGBRegressor model excels in accuracy, while linear regression stands out for efficiency, emphasizing the optimization of training data for precise stock price predictions.',
//     link: 'https://github.com/yourusername/project1',
//   },
//   {
//     title: 'Project 2',
//     description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada.',
//     details: 'More detailed description for Project 2. Pellentesque habitant morbi tristique senectus et netus et malesuada.',
//     link: 'https://github.com/yourusername/project2',
//   },
//   {
//     title: 'Project 2',
//     description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada.',
//     details: 'More detailed description for Project 2. Pellentesque habitant morbi tristique senectus et netus et malesuada.',
//     link: 'https://github.com/yourusername/project2',
//   },
//   {
//     title: 'Project 2',
//     description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada.',
//     details: 'More detailed description for Project 2. Pellentesque habitant morbi tristique senectus et netus et malesuada.',
//     link: 'https://github.com/yourusername/project2',
//   },
//   {
//     title: 'Project 2',
//     description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada.',
//     details: 'More detailed description for Project 2. Pellentesque habitant morbi tristique senectus et netus et malesuada.',
//     link: 'https://github.com/yourusername/project2',
//   },
//   {
//     title: 'Project 2',
//     description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada.',
//     details: 'More detailed description for Project 2. Pellentesque habitant morbi tristique senectus et netus et malesuada.',
//     link: 'https://github.com/yourusername/project2',
//   },
//   {
//     title: 'Project 2',
//     description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada.',
//     details: 'More detailed description for Project 2. Pellentesque habitant morbi tristique senectus et netus et malesuada.',
//     link: 'https://github.com/yourusername/project2',
//   },
//   // Add more projects as needed
// ];

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   return (
//     <body>
//       <div className="projects-container">
//         <div className="project-list">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="project-box"
//               onMouseEnter={() => setSelectedProject(index)}
//               onMouseLeave={() => setSelectedProject(null)}
//             >
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
//               <a href={project.link} target="_blank" rel="noopener noreferrer">
//                 View Code
//               </a>
//             </div>
//           ))}
//         </div>

//         <div className="project-details">
//           {selectedProject === null && (
//               <div className="project-box-placeholder">
//                 <h2>Hover over a project</h2>
//               </div>
//             )}
//           {selectedProject !== null && (
//             <div className="detailed-box">
//               <h2>{projects[selectedProject].title}</h2>
//               <p>{projects[selectedProject].details}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </body>
//   );
// };

// export default Projects;