import { useState, useEffect } from 'react'
import './App.css'
import Intro from './sections/Intro/Intro'
import Project from './sections/Project/Project'
import Publication from './sections/Publication/Publication'
import Experience from './sections/Experience/Experience'
import Profile from './sections/Profile/Profile'
import Skills from './sections/Skills/Skills'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    // Add event listener when component mounts
    window.addEventListener('resize', handleResize);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isProject, SetProject] = useState(1);
  const [isPublication, SetPublication] = useState(0);
  const [isExperience, SetExperience] = useState(0);

  const [widthExceeds, setWidthExceeds] = useState(0);
  useEffect(() => {
    if (windowSize.width >= 804) {
      setWidthExceeds(1);
    } else {
      setWidthExceeds(0);
    }
  }, [windowSize.width]);

  const switchToProject = () => {
    if (isProject == 0) {
      SetProject(1);
      SetPublication(0);
      SetExperience(0);
      document.getElementById("project").style.backgroundColor = "#222";
      // document.getElementById("project").style.boxShadow = "3px 2px 2px #555";
      document.getElementById("publication").style.backgroundColor = "#000";
      // document.getElementById("publication").style.boxShadow = "0px 0px 0px #000";
      document.getElementById("experience").style.backgroundColor = "#000";
      // document.getElementById("experience").style.boxShadow = "0px 0px 0px #000";
    }
  }

  const switchToPublication = () => {
    if (isPublication == 0) {
      SetProject(0);
      SetPublication(1);
      SetExperience(0);
      document.getElementById("project").style.backgroundColor = "#000";
      // document.getElementById("project").style.boxShadow = "0px 0px 0px #000";
      document.getElementById("publication").style.backgroundColor = "#222";
      // document.getElementById("publication").style.boxShadow = "3px 2px 2px #555";
      document.getElementById("experience").style.backgroundColor = "#000";
      // document.getElementById("experience").style.boxShadow = "0px 0px 0px #000";
    } 
  }

  const switchToExperience = () => {
    if (isExperience == 0) {
      SetProject(0);
      SetPublication(0);
      SetExperience(1);
      document.getElementById("project").style.backgroundColor = "#000";
      // document.getElementById("project").style.boxShadow = "0px 0px 0px #000";
      document.getElementById("publication").style.backgroundColor = "#000";
      // document.getElementById("publication").style.boxShadow = "0px 0px 0px #000";
      document.getElementById("experience").style.backgroundColor = "#222";
      // document.getElementById("experience").style.boxShadow = "3px 2px 2px #555";
    } 
  }

  return (
    <>
      <Intro />
      {widthExceeds == 1 && ( 
        <section className="toggle">
          <button id="project" onClick={switchToProject}>
            PROJECTS
          </button>
          
          <button id="publication" onClick={switchToPublication}>
            PUBLICATIONS
          </button>
          
          <button id="experience" onClick={switchToExperience}>
            EXPERIENCE
          </button>
        </section>
      )}
      
      { isProject == 1 && widthExceeds == 1 && <Project />}
      { isPublication == 1 && widthExceeds == 1 && <Publication />}
      { isExperience == 1 && widthExceeds == 1 && <Experience />}
      { widthExceeds == 0 && <Profile /> }

      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
