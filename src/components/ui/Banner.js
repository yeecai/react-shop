import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = ({
    storeName: {
        color: "red"
    },
    buttons: {
        display: "flex",
        flex: 1,
        float: "right",
    },
    barback: {
        background: "white"
    },
    menuButton:{
        marginRight: '30px',
        textDecoration: 'none'
    },
    appbar: {
        padding: "0 60px"
    }
});

class Banner extends React.Component{
    render(){
        const{ classes } = this.props;

        const productLink = <Link to={"/"}>
            <Typography variant="button" gutterBottom>Shop</Typography>
        </Link>
        //textAlign:'right'}}>
        const cartLink = <Link to={"/"} className={classes.menuButton} style={{position:'absolute', right:0}}>
            <Typography variant="button" gutterBottom>Cart</Typography>
        </Link>

        let menu;
        // shop,home,cart
        menu = (
            <span className={classes.buttons}>
                {productLink}
                 {cartLink}
            </span>
        );
        return(
            <div>
            <AppBar className="classes.barback" color="tertiary">
                <Toolbar>
                <Link to={"/"} className={classes.menuButton}>
                <div className="logo"/>
                <h3 className={classes.storeName}>My store</h3></Link>
                {menu}

                </Toolbar>
            </AppBar>
            </div>
        );
    }
};
export default withStyles(styles)(Banner);
