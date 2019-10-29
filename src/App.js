import React from 'react'
import axios from 'axios';

import Counter from './components/Counter'


import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {

  render() {
    return (
      <div className="container text-center">
      
        <Counter />

      </div>
    )
  }
}
