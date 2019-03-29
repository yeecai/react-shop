import React, {Component} from 'react';
import { Route, Link, Redirect } from 'react-router-dom'

class ProductDetailPage extends Component{
    render(){
        const { me } = this.props;
        {/*alert(me.photos);*/}
        const photoss = me.photos;
        const photoList = photoss.map((each)=>
            <li><img src={require(`../../assets/${each}`)}/></li>
        );
        return(
            <div style={{padding:'200px'}}>
                <h1>All stuff</h1>
                <h2>Giant test heading</h2>
                <ul>{photoList}</ul>
                <Link to="/react-shop">I'm {me.name}</Link>
            </div>
        );
    }
}

export default ProductDetailPage;
