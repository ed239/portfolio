// import React, { useState, useEffect,useRef } from 'react';
// import './Experience.css'; // Import your CSS file or define styles here

// const Experience = () => {
//   const leadershipRef = useRef(null);

//   const handleExperienceSectionClick = (ref) => {
//     ref.current.scrollIntoView({
//       behavior: 'smooth',
//       block: 'center',
//       inline: 'center',
//     });
    
//   };
  
//   const [activeSection, setActiveSection] = useState('');
//   const [hoveredSection, setHoveredSection] = useState('');

//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     const sections = document.querySelectorAll('.experience-section');

//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.offsetHeight;

//       if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//         setActiveSection(section.id);
//       }
//     });
//    };

//   const handleHover = (sectionId) => {
//     setHoveredSection(sectionId);
    
//   };

//   // const handleSectionClick = (sectionId) => {
//   //   // Scroll to the corresponding section on the right side
//   //   const targetSection = document.getElementById(sectionId);
//   //   if (targetSection) {
//   //     window.scrollTo({
//   //       top: targetSection.offsetTop, // Adjust offset as needed
//   //       behavior: 'smooth',
//   //     });
//   //   }
//   // };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <body className='exs-body'>
//       <div className="experiences-container">
//         <div className="left-section">
//         <div
//             className={`experience-section ${activeSection === 'professional' ? 'active' : ''}`}
//             id="professional"
//             // onMouseEnter={() => handleHover('professional')}
//             // onMouseLeave={() => handleHover('')}
//             // onClick={() => handleSectionClick('professional')}
//           >
//             <p>Professional Experience</p>
//           </div>
//           <div
//             className={`experience-section ${activeSection === 'research' ? 'active' : ''}`}
//             id="research"
//             // onMouseEnter={() => handleHover('research')}
//             // onMouseLeave={() => handleHover('')}
//             // onClick={() => handleSectionClick('research')}
//           >
//             <p>Research</p>
//           </div>
//           <div
//             className={`experience-section ${activeSection === 'leadership' ? 'active' : ''}`}
//             id="leadership"
//             onClick={() => handleExperienceSectionClick(leadershipRef)}
//             // onMouseEnter={() => handleHover('leadership')}
//             // nMouseLeave={() => handleHover('')}
//             // onClick={() => handleSectionClick('leadership')}
//           >
//             <p>Leadership</p>
//           </div>
//         </div>

//         <div className="right-section">
//           <div className="column-section">
//           <div className='individual-section' id="professional">
//               <div className="rounded-box">
//                   <h3>Morgan Stanley, New York | June 2022 - August 2022</h3>
//                   <h4>Internal Technology Audit Summer Analyst</h4>
//                   <ul>
//                       <li>• Designed Risk Control Matrix for a technology legal and compliance audit</li>
//                       <li>• Tested technology process control for an ongoing audit</li>
//                       <li>• Analyzed and uploaded audit progress through OpenPages</li>
//                       <li>• Formed ESG investing firm recommendations and presented to company executives</li>
//                   </ul>
//               </div>
//               <div className="rounded-box">
//                   <h3>Crestron Electronics, New Jersey | May 2021 - August 2021</h3>
//                   <h4>Software Development Intern</h4>
//                   <ul>
//                       <li>• Independently developed and improved code within the company's quoting software</li>
//                       <li>• Provided support and analysis for technical issues within ServiceNow</li>
//                       <li>• Evaluated and integrated bug fixes in Quality Assurance using Git</li>
//                       <li>• Presented at daily team scrum meetings with Agile Development</li>
//                   </ul>
//               </div>

//               <div className="rounded-box">
//                   <h3>IBM Accelerate Program, Virtual | June 2021 - August 2021</h3>
//                   <h4>Seller Track Apprentice</h4>
//                   <ul>
//                       <li>•Gained foundational and industry related skills to further technical and soft skills</li>
//                       <li>• Modelled and presented weekly sales reports to IBM professionals</li>
//                   </ul>
//               </div>
//             </div>

          
//             <div className='individual-section'  id="research">
//             <div className="rounded-box">
//                   <h3>Big Data and Analytics Lab, NJIT | September 2021 - May 2023</h3>
//                   <h4>Research Assistant</h4>
//                   <ul>
//                       <li>• Optimizing route planning algorithm with reinforcement learning methods in Python</li>
//                       <li>• Developing a multiple agent multiple object oceanic positioning system</li>
//                       <li>• Testing and standardizing maritime route planning navigation algorithm</li>
//                   </ul>
//               </div>
//             </div>

//             <div className='individual-section' id="leadership" ref={leadershipRef}>
//             <div className="rounded-box">
//                   <h3>Honors College Residence Hall , NJIT | September 2021 - May 2023</h3>
//                   <h4>Resident Assistant</h4>
//                   <ul>
//                       <li>• Managing residence hall floor of 100+ undergraduate students</li>
//                       <li>• Creating and hosting community building programs for residents</li>
//                       <li>• Enforcing university rules for a safe living environment</li>
//                   </ul>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </body>
//   );
// };

// export default Experience;