import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Error from './components/Error';
import NavBar from './components/NavBar';
import Content from './components/Content';
function App() {
  return (
    <div style={{background:"#F3F3F3",paddingBottom:50,height:"100%"}}>
   <Router>
      <NavBar/>
        <Content/>
        <Switch>
          <Route exact path="/"  />
          <Route  component={Error}/>
        </Switch>
        
  </Router>
</div>
  );
}

export default App;
