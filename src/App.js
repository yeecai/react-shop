import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Banner from './components/ui/Banner';

class App extends React.Component{
    render(){
        return (
            <Router>
            <Banner />
            </Router>
        );
    }
}

export default App;
