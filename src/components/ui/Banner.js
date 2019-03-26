import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Banner extends React.Component{
    render(){
        return(
            <div>
            <AppBar position="static" color="#rgb(40, 47, 38)">
            <Toolbar></Toolbar>
            </AppBar>
            </div>
        );
    }
}
export default Banner;
