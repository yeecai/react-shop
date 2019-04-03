import React, { Component } from 'react';
import CartCheckout from '../cart/CartCheckout';
import Address from './Address';
import styled from 'styled-components';

const Block = styled.div`
    padding:10px;
    margin: 0 30px 0 30px;
    @media (max-width: 650px) {
        margin:10px;
    }

`;
class Checkout extends React.Component{
    render(){
        return(
            <div>
            {/*<h2>I'm the checkout page</h2>*/}

            <Block><Address/></Block>
            <Block><CartCheckout config={this.props.config}/></Block>
            </div>
        );
    }
}
export default Checkout;
