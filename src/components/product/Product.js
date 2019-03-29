import React, {Component} from 'react';
import { Route, Link, Redirect } from 'react-router-dom'

class ProductDetailPage extends Component{
    render(){
        const { config } = this.props;
        return(
        <div style={{padding:'200px'}}>
            <h1>All stuff</h1>
            <h2>Giant test heading</h2>
            <div></div>
            <Link to="/">I'm {config}</Link>
        </div>
    )
}
}

export default ProductDetailPage;
