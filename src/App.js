import Fade from 'react-reveal/Fade';
import {Parallax} from 'react-parallax';
import Container from "react-bootstrap/Container";
import Slide from "react-reveal/Slide";

//components
import MyNavbar from './components/my-navbar/my-navbar.component';
import MyCorousal from './components/my-corousal/my-corousal.component';
import TitleMessage from './components/title-message-typewriter/title-message-component';

import About from './pages/about/about.component';
import Skills from './pages/skills/skills.component';
import Experience from './pages/experience/experience.component';

import './App.css';

const App = () => {
  return (<div lassName="App" style={{ position: "relative" }}>
    <MyNavbar />
    <MyCorousal />
    <TitleMessage />
    {/* ABOUT ME */}
    <div>
    <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
    </div>
    <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>

  </div>);
}

export default App;