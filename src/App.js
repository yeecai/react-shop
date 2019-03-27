import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Banner from './components/ui/Banner';

class App extends React.Component{
    state={};
    render(){
        return (
            <Router>
            <Banner />
            </Router>
        );
    }
}

export default App;
