import React, { Component } from 'react';
import { Link,Route } from 'react-router-dom';
import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MobDropdown from './BannerDropdown.js';

const MenuWrapper = styled.div`
    >a{
        text-decoration: none;
    }
`;
const StoreName = styled.h3`
    color: black;
    {/*@media (max-width: 650px) {
    }*/}
    text-decoration: 'none',
`;

const Appbar = styled.div`
    background:white;
    /*@media (max-width: 650px) {
        background:  #347a6d;
    }*/
`;
class Banner extends React.Component{
    render(){
        const{ classes } = this.props;

        const productLink = <Link to={"/react-shop/Product"}  style={{position:'absolute', right: '35%'}}>
            Shop
        </Link>
        //textAlign:'right'}}>
        const cartLink = <Link to={"/react-shop/cart"}  style={{position:'absolute', right:'5%'}}>Cart</Link>
        {/*<Typography variant="button" gutterBottom>product</Typography>*/}
        {/*<Typography variant="button" gutterBottom>product</Typography>*/}
        {/*<div>PRODUCTS</div>*/}

        let menu;
        // shop,home,cart
        if (isWidthDown('xs', this.props.width)) {
            //alert(this.props.width);//undefined
            menu = <MobDropdown/>;
        }else{
            menu = (
                <MenuWrapper>
                    {productLink}
                    {cartLink}
                </MenuWrapper>
            );
        }
        return(
            <div>
            <AppBar color="white">
                <Appbar>
                <Toolbar>
                <Link to={"/react-shop"} style={{textDecoration:'none',position:'absolute',left:'5%'}}>
                    <StoreName>@囍</StoreName>
                </Link>
                    {menu}
                </Toolbar>
            </Appbar>
            </AppBar>
            </div>
        );
    }
};
export default withWidth()(Banner);
