import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Painting from './pages/Painting';
import Header from './components/Header';
//import data from './data.json'

const App = () => {

  return (
      <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/gallery" component={Painting}  />
                </Switch>
            </div>
      </Router>
  );
}

export default App;