import './App.css';
import React, { Component } from 'react';
import data from '../data.json';
import Grid from './Grid';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data }
  }
  render() {
    return (
        <div>
          <div className='navbar-fixed'>
            <nav className='blue lighten-2'>
              <div className='nav-wrapper'>
                <a href='/' className='brand-logo center'>Contacts</a>
              </div>
            </nav>
          </div>
          <div>
            <Form />
            <Grid items={this.state.data}/>
          </div>
        </div>
    );
  }
}

export default App;
