import React, { Component } from 'react';
import Intro from '../ui/Intro';

import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import config from '../../assets/store_config';
import Grid from '@material-ui/core/Grid';
{/*import test from '/home/lilian/react/react-shop/src/assets/p1/IMG_20190215_152601.jpg';
*/}


const PaperWrapper = styled.div`
    margin: 100px 100px 0px 100px;

    @media (max-width: 1024px) {
        margin: 20px;
    }
    @media (max-width: 650px) {
        margin: 20px;
    },

`;

const ProductList = styled.div`
    margin: 40px;
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;

    @media (max-width: 1024px)
    {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
    @media (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 20px;
    }

`;
const Title = styled.div`
    font-size: 20px;
    color:black
    @media (max-width: 650px) {
        font-size: 15px;
    }
`;
const Price = styled.div`
    color:black
    @media (max-width: 650px) {
        font-size: 12px;
    }
`;
const Pic = styled.img`
    padding:0;
    width:100%;
    height:100%;
    @media (min-width: 650px) {
      filter: grayscale(100%);
      transition: filter .5s;
      &:hover {
        filter: grayscale(0.1);
      }
}
`;

const Product = styled.div`
    max-width: 1100px;
    margin: 20px auto 50px;
    > a {
        text-decoration: none;
    }
`;
class Products extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        const listItems = config.productsinfo.map((each) =>
            <Product>
                <Link to="#">
                    <Pic src={require(`../../assets/${each.photos[0]}`)}/>
                    <Title>{each.name}</Title>
                    <Price>{each.price}</Price>
                </Link>
            </Product>
          );
        return(
            <PaperWrapper>
                <Paper>
                    <Intro/>
                    <ProductList>
                        {listItems}
                    </ProductList>
                </Paper>
            </PaperWrapper>
        );
    }
};

export default Products;
