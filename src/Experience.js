import React, { useState, useEffect,useRef } from 'react';
import './Experience.css'; // Import your CSS file or define styles here

const Experience = () => {
  const [activeSection, setActiveSection] = useState('');
  const [hoveredSection, setHoveredSection] = useState('');

  const professionalRef = useRef(null);
  const researchRef = useRef(null);
  const leadershipRef = useRef(null);

  const handleHover = (sectionId) => {
    setHoveredSection(sectionId);
    // setHoveredSection(sectionId);
  };

  const handleHoverExit=()=>{
    setHoveredSection('');
  };

  const handleExperienceSectionClick = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

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
    <body className='exs-body'>
    {windowWidth > 960 ? (
      <>
      <div className="experiences-container">
        <div className="left-section">
        <div
          className={`experience-section ${
              (activeSection === 'professional' || hoveredSection === 'professional') ? 'active highlighted' : ''
            }`}
            id="professional"
            onClick={() => handleExperienceSectionClick(professionalRef)}
          >
            <p>Professional Experience</p>
          </div>
          <div
            className={`experience-section ${(activeSection === 'research' || hoveredSection === 'research') ? 'active' : ''}`}
            id="research"
            onClick={() => handleExperienceSectionClick(researchRef)}
          >
            <p>Research</p>
          </div>
          <div
            className={`experience-section ${(activeSection === 'leadership' || hoveredSection === 'leadership') ? 'active' : ''}`}
            id="leadership"
            onClick={() => handleExperienceSectionClick(leadershipRef)}
          >
            <p>Leadership</p>
          </div>
        </div>

        <div className="right-section">
          <div className="column-section">
          <div className='individual-section' id="professional" ref={professionalRef}
              onMouseEnter={() => handleHover('professional')}
              onMouseLeave={() => handleHoverExit()}>
              <div className="rounded-box">
                  <h3>Morgan Stanley, New York | June 2022 - August 2022</h3>
                  <h4>Internal Technology Audit Summer Analyst</h4>
                  <ul>
                      <li>• Designed Risk Control Matrix for a technology legal and compliance audit</li>
                      <li>• Tested technology process control for an ongoing audit</li>
                      <li>• Analyzed and uploaded audit progress through OpenPages</li>
                      <li>• Formed ESG investing firm recommendations and presented to company executives</li>
                  </ul>
              </div>
              <div className="rounded-box">
                  <h3>Crestron Electronics, New Jersey | May 2021 - August 2021</h3>
                  <h4>Software Development Intern</h4>
                  <ul>
                      <li>• Independently developed and improved code within the company's quoting software</li>
                      <li>• Provided support and analysis for technical issues within ServiceNow</li>
                      <li>• Evaluated and integrated bug fixes in Quality Assurance using Git</li>
                      <li>• Presented at daily team scrum meetings with Agile Development</li>
                  </ul>
              </div>

              <div className="rounded-box">
                  <h3>IBM Accelerate Program, Virtual | June 2021 - August 2021</h3>
                  <h4>Seller Track Apprentice</h4>
                  <ul>
                      <li>•Gained foundational and industry related skills to further technical and soft skills</li>
                      <li>• Modelled and presented weekly sales reports to IBM professionals</li>
                  </ul>
              </div>
            </div>

          
            <div className='individual-section'  id="research" ref={researchRef}
              onMouseEnter={() => handleHover('research')}
              onMouseLeave={() => handleHoverExit()}>
            <div className="rounded-box">
                  <h3>Big Data and Analytics Lab, NJIT | September 2021 - May 2023</h3>
                  <h4>Research Assistant</h4>
                  <ul>
                      <li>• Optimized route planning algorithm with reinforcement learning methods in Python</li>
                      <li>• Developed a multiple agent multiple object oceanic positioning system</li>
                      <li>• Tested and standardized maritime route planning navigation algorithm</li>
                  </ul>
              </div>
            </div>

            <div className='individual-section' id="leadership" ref={leadershipRef}
              onMouseEnter={() => handleHover('leadership')}
              onMouseLeave={() => handleHoverExit()}>
            <div className="rounded-box">
                  <h3>Honors College Residence Hall , NJIT | September 2021 - May 2023</h3>
                  <h4>Resident Assistant</h4>
                  <ul>
                      <li>• Managed residence hall floor of 100+ undergraduate students</li>
                      <li>• Created and hosted community building programs for residents</li>
                      <li>• Enforced university rules for a safe living environment</li>
                  </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      </>
    ):(
      <div className="whole">
      <div className="left-sectionm">
        <div className="buttonm" onClick={() => handleExperienceSectionClick(professionalRef)}>Professional</div>
        <div className="buttonm" onClick={() => handleExperienceSectionClick(researchRef)}>Research</div>
        <div className="buttonm" onClick={() => handleExperienceSectionClick(leadershipRef)}>Leadership</div>
      </div>
        
        <div className="right-sectionm">
          <div className="column-sectionm">
          
          <div className='individual-sectionm' id="professional" ref={professionalRef}
              onMouseEnter={() => handleHover('professional')}
              onMouseLeave={() => handleHoverExit()}>
              <h2>Professional</h2>
              <div className="rounded-boxm">
                  <h3>Morgan Stanley, New York | June 2022 - August 2022</h3>
                  <h4>Internal Technology Audit Summer Analyst</h4>
                  <ul>
                      <li>• Designed Risk Control Matrix for a technology legal and compliance audit</li>
                      <li>• Tested technology process control for an ongoing audit</li>
                      <li>• Analyzed and uploaded audit progress through OpenPages</li>
                      <li>• Formed ESG investing firm recommendations and presented to company executives</li>
                  </ul>
              </div>
              <div className="rounded-boxm">
                  <h3>Crestron Electronics, New Jersey | May 2021 - August 2021</h3>
                  <h4>Software Development Intern</h4>
                  <ul>
                      <li>• Independently developed and improved code within the company's quoting software</li>
                      <li>• Provided support and analysis for technical issues within ServiceNow</li>
                      <li>• Evaluated and integrated bug fixes in Quality Assurance using Git</li>
                      <li>• Presented at daily team scrum meetings with Agile Development</li>
                  </ul>
              </div>

              <div className="rounded-boxm">
                  <h3>IBM Accelerate Program, Virtual | June 2021 - August 2021</h3>
                  <h4>Seller Track Apprentice</h4>
                  <ul>
                      <li>•Gained foundational and industry related skills to further technical and soft skills</li>
                      <li>• Modelled and presented weekly sales reports to IBM professionals</li>
                  </ul>
              </div>
            </div>

            <h2>Research</h2>
            <div className='individual-sectionm'  id="research" ref={researchRef}
              onMouseEnter={() => handleHover('research')}
              onMouseLeave={() => handleHoverExit()}>
            <div className="rounded-boxm">
                  <h3>Big Data and Analytics Lab, NJIT | September 2021 - May 2023</h3>
                  <h4>Research Assistant</h4>
                  <ul>
                      <li>• Optimized route planning algorithm with reinforcement learning methods in Python</li>
                      <li>• Developed a multiple agent multiple object oceanic positioning system</li>
                      <li>• Tested and standardized maritime route planning navigation algorithm</li>
                  </ul>
              </div>
            </div>
            <h2>Leadership</h2>
            <div className='individual-sectionm' id="leadership" ref={leadershipRef}
              onMouseEnter={() => handleHover('leadership')}
              onMouseLeave={() => handleHoverExit()}>
            <div className="rounded-boxm">
                  <h3>Honors College Residence Hall , NJIT | September 2021 - May 2023</h3>
                  <h4>Resident Assistant</h4>
                  <ul>
                      <li>• Managed residence hall floor of 100+ undergraduate students</li>
                      <li>• Created and hosted community building programs for residents</li>
                      <li>• Enforced university rules for a safe living environment</li>
                  </ul>
              </div>
            </div>

          </div>
        </div>
        </div>
    )}
    </body>
  );
};

export default Experience;