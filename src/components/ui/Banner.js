import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MobDropdown from './BannerDropdown.js'

const styles = ({
    storeName: {
        color: "#616f32",
        fontSize: '25px'
    },
    buttons: {
        display: "flex",
        flex: 1
    },
    menuButton:{
        marginRight: '20px',
        textDecoration: 'none'
    },
    appbar: {
        padding: "0px 20px 0px",
    }
});

class Banner extends React.Component{
    render(){
        const{ classes } = this.props;

        const productLink = <Link to={"/"} className={classes.menuButton} style={{position:'absolute'}}>
            <Typography variant="button" gutterBottom>product</Typography>
        </Link>
        //textAlign:'right'}}>
        const cartLink = <Link to={"/"} className={classes.menuButton} style={{position:'absolute', right:0}}>
            <Typography variant="button" gutterBottom>Cart</Typography>
        </Link>

        let menu;
        // shop,home,cart
        if (isWidthDown('sm', this.props.width)) {
            //alert(this.props.width);//undefined
            menu = <MobDropdown/>;
        }else{
            menu = (
                <span className={classes.menuButton}>
                    {productLink}
                    {cartLink}
                </span>
            );
        }
        return(
            <div>
            <AppBar className={classes.appbar} color="default">
                <Toolbar>
                <Link to={"/"} className={classes.menuButton}>
                    <div className="logo"/>
                    <h3 className={classes.storeName}>Ye'store</h3>
                </Link>
                    {menu}
                </Toolbar>
            </AppBar>
            </div>
        );
    }
};
export default withWidth()(withStyles(styles)(Banner));
