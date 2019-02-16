import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
              <Link to="/mcsim">McSim</Link>
              Home
          </div>
        );
    }
}

export default Home;