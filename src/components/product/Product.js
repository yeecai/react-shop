import React, {Component} from 'react';
import { Route, Link, Redirect } from 'react-router-dom'

class ProductDetailPage extends Component{
    render(){
        const { product } = this.props;
        return(
        <div><Link to="/">I'm {product.name}</Link></div>
    )
}
}

export default ProductDetailPage;
