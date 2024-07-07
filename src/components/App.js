// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import FlightSearch from '../pages/FlightSearch';
import FlightBooking from '../pages/FlightBooking';
import Confirmation from '../pages/Confirmation';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/flight-search">Search Flights</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/flight-search" component={FlightSearch} />
          <Route path="/flight-booking" component={FlightBooking} />
          <Route path="/confirmation" component={Confirmation} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
