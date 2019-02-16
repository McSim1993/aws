import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Stream extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
              <Link to="/">Home</Link>
              Stream
          </div>
        );
    }
}

export default Stream;