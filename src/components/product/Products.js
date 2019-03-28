import React, { Component } from 'react';

import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import config from '../../assets/store_config';
import Grid from '@material-ui/core/Grid';
{/*import test from '/home/lilian/react/react-shop/src/assets/p1/IMG_20190215_152601.jpg';
*/}
const styles = theme =>({
    pic:{
        padding:'0',
        width:"100%",
        height:"100%"
    },
    product:{

    },
    title:{
        textDecoration: 'none',
        color:'black'
    }
});

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
    grid-template-columns: repeat(3, 1fr);
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
{/*const ProductListWrapper = styled.div`
  padding: 40px;
  @media (max-width: 650px) {
    padding: 20px;
  }
`;*/}

const Product = styled.div`
    max-width: 1100px;
    margin: 20px auto 50px;
`;
class Products extends Component{
    render(){
        const {classes} = this.props
        const listItems = config.productsinfo.map((each) =>
            <Product>
                <Link to="#">
                    <img src={require(`../../assets/${each.photos[0]}`)} alt={each.name} className ={classes.pic}/>
                    <div>{each.name}</div>
                    <div>{each.price}</div>
                </Link>
            </Product>
          );
        return(
            <PaperWrapper>
                <Paper>
                    <ProductList>
                        {listItems}
                    </ProductList>
                </Paper>
            </PaperWrapper>
        );
    }
};

export default withStyles(styles)(Products);
