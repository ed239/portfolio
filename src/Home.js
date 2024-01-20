
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import nyc from './nyc.jpeg'

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleLinkScroll=(event)=>{
    const to = event.currentTarget.getAttribute('to');
    window.location.to = to;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

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
    <body className="bodyH">
       {windowWidth > 960 ? (
        <div>
        <div id="top-half">
          <div id="parallelogram">
            <div id="parallelogram-text">Eden <br/>Dubrovsky</div>
              <img id="profile-picture" src={nyc} alt="Headshot" />
          </div>
          {/* <div id="profile-picture-container">
            <img id="profile-picture" src={nyc} alt="Headshot" />
          </div> */}
        </div>

        <div id="bottom-half">
          {/* <Square title="About" description="I am a master's student seeking a job in software engineering relating to web, app, or systems development. " link="https://www.linkedin.com/in/edendubrovsky" name="LinkedIn Profile"/> */}
          <Link to='https://www.linkedin.com/in/edendubrovsky' className="rounded-square" target="_blank" rel="noopener noreferrer">
            <h2>About</h2>
            <p>I am a master's student seeking a software engineering job in the NYC/NJ area.</p>
            <a id="learn-more-button">LinkedIn</a>
          </Link>
          <Link to='/education' className="rounded-square" onClick={handleLinkScroll}>
            <h2>Education & Skills</h2>
            <p>I completed my Bachelors in Computer Science and am working towards my Masters degree at Boston Univerity.</p>
            <a id="learn-more-button">Learn More</a>
          </Link>
          <Link to='/experience' className="rounded-square" onClick={handleLinkScroll}>
            <h2>Experience</h2>
            <p>Professional Corporate experience along with research, leadership, and student work.</p>
            <a id="learn-more-button">Learn More</a>
          </Link>
          <Link to='/projects2' className="rounded-square" onClick={handleLinkScroll}>
            <h2>Projects</h2>
            <p>Take a glance at the projects I have completed ranging from web and app development to ML.</p>
            <a id="learn-more-button" >Learn More</a>
          </Link>
        </div>
        </div>
        
       ):(
        <div className="bodyH">
          <div className="headline">
              <img id="profile-picturem" src={nyc} alt="Headshot" />
            <div id="parallelogram-textm">Eden <br/>Dubrovsky</div>
          </div>

          <Link to='https://www.linkedin.com/in/edendubrovsky' className="rounded-square" target="_blank" rel="noopener noreferrer">
            <h2>About</h2>
            <p>I am a master's student seeking a software engineering job in the NYC/NJ area.</p>
            <a id="learn-more-button">LinkedIn</a>
          </Link>
          <Link to='/education' className="rounded-square" onClick={handleLinkScroll}>
            <h2>Education & Skills</h2>
            <p>I completed my Bachelors in Computer Science and am working towards my Masters degree at Boston Univerity.</p>
            <a id="learn-more-button">Learn More</a>
          </Link>
          <Link to='/experience' className="rounded-square" onClick={handleLinkScroll}>
            <h2>Experience</h2>
            <p>Professional Corporate experience along with research, leadership, and student work.</p>
            <a id="learn-more-button">Learn More</a>
          </Link>
          <Link to='/projects2' className="rounded-square" onClick={handleLinkScroll}>
            <h2>Projects</h2>
            <p>Take a glance at the projects I have completed ranging from web and app development to ML.</p>
            <a id="learn-more-button">Learn More</a>
          </Link>
          <br></br>
  
          
        </div>

       )}

       
    </body>
    );
};
 export default Home;