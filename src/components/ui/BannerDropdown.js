import React, { Component } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Link,Route } from 'react-router-dom';

class MobDropdown extends Component {
    constructor(props) {
        super(props);
        this.state={ open: false };
        {/*this.toggleMenu = this.toggleMenu.bind(this);*/}
    }
    toggleMenu = (open) =>{
        this.setState({open});
    }

    render(){
        return(
            <span style={{position:'absolute', right:'5%'}}>
            <MenuIcon onClick={() => this.toggleMenu(true)}/>
            <SwipeableDrawer anchor="right"
                open={this.state.open}
                onClick={() => this.toggleMenu(false)}>
                <List onClick={() => this.toggleMenu(false)}>
                    <ListItem >Home</ListItem>
                    <ListItem >Product</ListItem>
                    <ListItem ><Link to={'/react-shop/cart'}>Cart</Link></ListItem>
                </List>
            </SwipeableDrawer>
            </span>
        );
    }
};

export default MobDropdown;
