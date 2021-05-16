import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cards from './components/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/Footer'
import Projects from './components/Projects'
import Schooling from './components/Schooling'
import Accolades from './components/Accolades'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cards' component={Cards} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
          <Route path='/schooling' component={Schooling} />
          <Route path='/contact' component={Contact} />
          <Route path='/accolades' component={Accolades} />
          <Route 
            path='/linkedin' 
            component={() => { 
            window.location.href = 'https://www.linkedin.com/in/julien-miranda-9084bb1bb/'; 
            return null;
          }}/>
          <Route 
            path='/github' 
            component={() => { 
            window.location.href = 'https://github.com/JulienCruz06'; 
            return null;
          }}/>
          <Route 
            path='/purdue' 
            target='_blank'
            component={() => { 
            window.location.href = 'https://www.pnw.edu'; 
            return null;
          }}/>
          <Route 
            path='/bethel' 
            target='_blank'
            component={() => { 
            window.location.href = 'https://betheltech.net'; 
            return null;
          }}/>
          <Route 
            path='/yahoo' 
            component={() => { 
            window.location.href = 'mailto:julienmiranda74@yahoo.com'; 
            return null;
          }}/>
          <Route 
            path='/gmail' 
            component={() => { 
            window.location.href = 'mailto:miranda9@pnw.edu'; 
            return null;
          }}/>
          <Route 
            path='/reactCounter' 
            component={() => { 
            window.location.href = 'https://github.com/JulienCruz06/ReactCounter'; 
            return null;
          }}/>
          <Route 
            path='/yardSaleLocator' 
            component={() => { 
            window.location.href = 'https://github.com/JulienCruz06/team-java-boys-frontend/tree/dev'; 
            return null;
          }}/>
        </Switch>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
