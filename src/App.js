import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Banner from './components/ui/Banner';
import Products from './components/product/Products';

class App extends React.Component{
    state={};
    render(){
        return (
            <Router>
                <Banner/>
                <Products/>
            </Router>
        );
    }
}

export default App;
