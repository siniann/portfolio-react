import Fade from 'react-reveal/Fade';
import {Parallax} from 'react-parallax';
import Container from "react-bootstrap/Container";

//components
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCorousal from "./components/my-corousal/my-corousal.component";
import About from './pages/about/about.component';
import './App.css';
import TitleMessage from "./components/title-message-typewriter/title-message-component";

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
  </div>);
}

export default App;