import {Routes, Route, useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
import './Home.css';
import nyc from './nyc.jpeg'


export default function Home(){
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
          <Square title="About" description="I am a master's student seeking a job in software engineering relating to web & systems development, iOS development. " link="https://www.linkedin.com/in/edendubrovsky" name="LinkedIn Profile"/>
          <Square title="Education & Skills" description="I completed my Bachelors in Computer Science and am working towards my Masters degree at Boston Univerity." link="/education" name="Learn More" />
          <Square title="Experience" description="Professional Corporate experience along with research, leadership, and student work." link="/experience" name="Learn More" />
          <Square title="Projects" description="Take a glance at the project I have completed ranging from web & app development to ML." link="/projects" name="Learn More" />
        </div>
        </div>
        
       ):(
        <div className="bodyH">
          <div className="headline">
              <img id="profile-picturem" src={nyc} alt="Headshot" />
            <div id="parallelogram-textm">Eden <br/>Dubrovsky</div>
          </div>
          <Square title="About" description="I am a master's student seeking a job in software engineering realting to web & systems development, iOS development. " link="https://www.linkedin.com/in/edendubrovsky" name="LinkedIn Profile"/>
          <Square title="Education & Skills" description="I completed my Bachelors in Computer Science and am working towards my Masters degree at Boston Univerity." link="/education" name="Learn More" />
          <Square title="Experience" description="Professional Corporate experience along with research, leadership, and student work" link="/experience" name="Learn More" />
          <Square title="Projects" description="Take a glance at the project I have completed ranging from web & app development to ML." link="/projects" name="Learn More" />

          <br></br>
  
          
        </div>

       )}

       
    </body>
    )
}

const Square = ({ title, description, link,name }) => {
  const isNewTab = !link.startsWith('/');
    return (
      <div className="rounded-square">
        <h2>{title}</h2>
        <p>{description}</p>
        <a id="learn-more-button" 
        href={link}
        target={isNewTab ? "_blank" : "_self"}
        rel={isNewTab ? "noopener noreferrer" : ""}>{name}</a>
      </div>
    );
  };