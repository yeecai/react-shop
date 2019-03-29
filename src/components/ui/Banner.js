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
        font-size:100px;
    }
`;
const StoreName = styled.h3`
    color: black;
    font-size: 40px;
    @media (max-width: 650px) {
        font-size:25px;
    }
    text-decoration: 'none',
`;

const Appbar = styled.div`
    margin:20px;
    background:white;
    /*@media (max-width: 650px) {
        background:  #347a6d;
    }*/
`;
class Banner extends React.Component{
    render(){
        const{ classes } = this.props;

        const productLink = <Link to={"/react-shop/Product"}  style={{position:'absolute', right: '35%', fontSize: '30px'}}>
            PRODUCT
        </Link>
        //textAlign:'right'}}>
        const cartLink = <Link to={"/react-shop"}  style={{position:'absolute', right:'5%',fontSize: '30px'}}>CART</Link>
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
                    <StoreName>@Reaction</StoreName>
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
