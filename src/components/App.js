import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';

const App = () => {
  return (
    <main>
      
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
      </BrowserRouter>
    </main>
  )
}

export default App;
