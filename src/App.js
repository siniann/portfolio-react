//components
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCorousal from "./components/my-corousal/my-corousal.component";
import './App.css';
import TitleMessage from "./components/title-message-typewriter/title-message-component";

const App = () => {
  return (<div>
    <MyNavbar />
    <MyCorousal />
    <TitleMessage />
  </div>);
}

export default App;
