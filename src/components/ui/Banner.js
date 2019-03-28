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
    padding: 40px 40px 40px 40px;
    >a{
        text-decoration: none;
    }
`;
const StoreName = styled.h3`
    color: black;
    font-size: 30px;
    @media (max-width: 650px) {
        color: white;
    }
    text-decoration: 'none',
`;

const Appbar = styled.div`
    background:white;
    @media (max-width: 650px) {
        background:  #347a6d;
    }
`;
class Banner extends React.Component{
    render(){
        const{ classes } = this.props;

        const productLink = <Link to={"/product"}  style={{position:'absolute', left: '15%'}}>
            PRODUCT
        </Link>
        //textAlign:'right'}}>
        const cartLink = <Link to={"/"}  style={{position:'absolute', right:'5%'}}>CART</Link>
        {/*<Typography variant="button" gutterBottom>product</Typography>*/}
        {/*<Typography variant="button" gutterBottom>product</Typography>*/}
        {/*<div>PRODUCTS</div>*/}

        let menu;
        // shop,home,cart
        if (isWidthDown('sm', this.props.width)) {
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
            <AppBar>
                <Appbar>
                <Toolbar>
                <Link to={"/"} style={{textDecoration:'none'}}>
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
