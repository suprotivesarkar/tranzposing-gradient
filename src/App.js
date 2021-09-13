import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import projects from './components/Projects/projects';
import Webdevelopment from './components/Services/WebDev/Webdevelopment';
import Webdesign from './components/Services/Webdesign/Webdesign';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Route component={Home} path="/" exact/>
      <Route component={About} path="/about" exact/>
      <Route component={Contact} path="/contact" exact/>
      <Route component={projects} path="/projects" exact/>
      <Route component={Webdevelopment} path="/website-development" exact/>
      <Route component={Webdesign} path="/designing" exact/>

      </BrowserRouter>
    </div>
  );
}
export default App;