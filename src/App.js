import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Banner from './components/ui/Banner';
import Products from './components/product/Products';
import ProductDetailPage from './components/product/Product';
import Intro from './components/Intro';
import config from './assets/store_config';


class App extends React.Component{
    state={};
    render(){
        return (
        <div>

            <Router>
                <Banner/>
                {/*<Route exact path="/Product" Component{...ProductDetailPage}/>*/}
                <Route exact path="/react-shop/Product" render={(props) => <ProductDetailPage product={this.props}/>}/>
                <Route exact path="/react-shop" render={(props) => <Intro config={config} />}/>
            </Router>
        </div>
        );
    }
}

export default App;
