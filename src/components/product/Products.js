import React, { Component } from 'react';
import ProductDetailPage from './Product';

import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { Link, Route, BrowserRouter as Router} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
{/*import test from '/home/lilian/react/react-shop/src/assets/p1/IMG_20190215_152601.jpg';
*/}




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
    font-size: 15px;
    color:black
    @media (max-width: 650px) {
        font-size: 12px;
    }
`;
const Price = styled.div`
    color:black
    @media (max-width: 650px) {
        font-size: 10px;
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
{/*<Router>
<div>
    <Route exact path="/Product" component={ProductDetailPage} />
</div>
</Router>*/}
{/*constructor(props) {

        super(props);

    }*/}
class Products extends Component{
    render(){
        const {config} = this.props;
        const listItems = config.productsinfo.map((each,i) =>
            <Product>
                <Link to={`/react-shop/Product/${each.url}`}>
                    <Pic src={require(`../../assets/${each.photos[0]}`)}/>
                    <Title>{each.name}</Title>
                    <Price>{each.price}</Price>
                </Link>
            </Product>
          );
        return(
                    <ProductList>
                        {listItems}
                    </ProductList>
        );
    }
};

export default Products;
