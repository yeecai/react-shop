import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'

class ProductDetailPage extends Component{
    render(){
        console.log(this.props)
        return(
        <div>I'm a product</div>
    )
}
}
{/*<Route path="/Product" component={User} />*/}

export default ProductDetailPage;
