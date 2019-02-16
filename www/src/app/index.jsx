import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './../scss/main.scss';

import Home from './pages/Home.jsx';
import Stream from './pages/Stream.jsx';

class App extends React.Component {
  render () {
    return (
      <Router>
          <div>
              <Route exact path="/" component={Home}/>
              <Route exact path="/:id" component={Stream}/>
          </div>
      </Router>
    );
  }
}

render(<App/>, document.getElementById('app'));
