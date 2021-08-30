import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Painting from './pages/Painting';
import Header from './components/Header';
import data from './data.json';

const App = () => {
    const [viewport, setViewport] = useState(window.innerWidth),
          [thumbnails] = useState([...data]);

    function useWindowSize() {
        useEffect(() => {
          function updateSize() {
            setViewport(window.innerWidth);
          }      
          window.addEventListener("resize", updateSize);
          updateSize();
          return () => window.removeEventListener("resize", updateSize);
        }, [viewport]);
    
        return viewport;
      }
      
    useWindowSize()

  return (
      <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route 
                        exact path="/"
                        render={(props) => (
                            <Home {...props} thumbnails={thumbnails} viewport={viewport} />
                        )}
                    />
                    <Route
                        exact path="/gallery/:painting"
                        render={(props) => (
                            <Painting {...props} thumbnails={thumbnails} viewport={viewport} />
                        )}
                    />
                </Switch>
            </div>
      </Router>
  );
}

export default App;