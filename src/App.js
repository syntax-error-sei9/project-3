import React from 'react';
import Main from './components/main/Main'
import Nav from './components/nav/Nav'
import WhereToGo from './components/nav/WhereToGo'
import CountryCard from './components/main/CountryCard'
import {Route} from 'react-router-dom'
import IntrestDetails from './components/intrestDetails/intrestDetails'
import Interests from './components/interests/Interests'
import Cities from './components/cities/Cities'
import CityDetails from './components/main/CityDetails'
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      {/* NAV START HERE */}
      <header className="App-header">
        <Route path="/" component={Nav} />
        <Route exact path="/" render={() => {
          return (
            <React.Fragment>

              {/* Country Start */}
                <CountryCard />
              {/* country end */}

              {/* MAIN START HERE */}
                <Main />
              {/* MAIN END HERE */}

              {/* SIDE BAR START HERE */}
                <Sidebar />
              {/* SIDE BAR END HERE */}

      </React.Fragment>
          )
        }} />
              <Route exact path="/Countries" render = {() => {
          return(
            <CountryCard />
          )
        }} />
        <Route exact path="/Cities" render={() => {
          return(
            <Cities />
          )
          }}
          />
          <Route exact path="/Cities/:id" render={()=>{
            return(
              <CityDetails />
            )
          }} />
                  <Route exact path="/Interests" render={() => {
          return(
             <Interests />

          )
          }}
          />
          <Route exact path="/Interests/:id" render={()=>{
            return(
              <IntrestDetails />
            )
          }} />

          <WhereToGo />
      </header>
      {/* NAV END HERE */}
     
      

    </div>
  );
}

export default App;
