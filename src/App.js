import React from 'react';
import './App.css';
import Main from './components/main/Main'
import Nav from './components/nav/Nav'
import WhereToGo from './components/nav/WhereToGo'
import {Route} from 'react-router-dom'


import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      {/* NAV START HERE */}
      <header className="App-header">
        <Route path="/" component={Nav} />
        <Route exact path="/" render={() => {
          return (
            console.log("Home")
          )
        }} />
              <Route exact path="/Country" render = {() => {
          return(
            console.log("country")
          )
        }} />
        <Route exact path="/City" render={() => {
          return(
            console.log("City")
          )
          }}
          />
                  <Route exact path="/Interests" render={() => {
          return(
              console.log("Interests")

          )
          }}
          />
          <WhereToGo />
      </header>
      {/* NAV END HERE */}

      {/* MAIN START HERE */}
        <Main />
      {/* MAIN END HERE */}
     
     {/* SIDE BAR START HERE */}
      <Sidebar />
      {/* SIDE BAR END HERE */}
    </div>
  );
}

export default App;
