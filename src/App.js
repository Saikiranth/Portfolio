
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home'; 
import About from './Pages/About';
import Experience from './Pages/Experience';
import Project from './Pages/Project';
import Background from './Pages/Background';
import Certificates from './Pages/Certificates';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import TechStack from './Pages/TeckStack';


function App() {
  return (
    <div className="App">
    <Header />
    <Home/>
    <About/>
    <Experience/>
    <TechStack/>
    <Project /> 
    <Background/>
    <Certificates/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
