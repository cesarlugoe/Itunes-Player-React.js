
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import List from '../src/components/List';
import MusicPlayer from '../src/pages/MusicPlayer';

import './App.css';


class App extends Component {
  render() {
    return (
         <div className="App">
           <Route exact path="/" component={HomePage}/>
           <Route exact path="/tunes" component={List}/>
           <Route exact path="/tunes/:id" component={MusicPlayer}/>
        </div>
    )
  }
}

export default App;
