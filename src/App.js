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
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';


const PaperWrapper = styled.div`
    margin: 100px 100px 0px 100px;

    @media (max-width: 1024px) {
        margin: 100px 0 0 0;
    }
    @media (max-width: 650px) {
        margin: 0px;
    },

`;

class App extends React.Component{
    state={};
    render(){
        return (
        <div>
            <Router>
                <Banner/>
                <PaperWrapper>
                    <Paper>
                        {config.productsinfo.map((each) =>
                            <Route exact path={`/react-shop/Product/${each.url}`}
                                render={(props) => <ProductDetailPage me={each}/>}
                            />)
                        }
                        <Route exact path="/react-shop" render={(props) => <Intro config={config} />}/>
                    </Paper>
                </PaperWrapper>
            </Router>
        </div>
        );
    }
}

export default App;
