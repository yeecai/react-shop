import React, { Component } from 'react';
import styled from 'styled-components';
import Products from './product/Products';
import Paper from '@material-ui/core/Paper';

import { Link, Route, BrowserRouter as Router} from 'react-router-dom';

const IntroWrapper = styled.div`
    height:200px;
    font-size:20px;
    background: #346a5d;
    align-items: center;
    justify-content: center;
    display: flex;
    padding:40px;
    @media (max-width: 650px) {
        background: white ;
        font-size:20px;
    }

`;
const PaperWrapper = styled.div`
    margin: 100px 100px 0px 100px;

    @media (max-width: 1024px) {
        margin: 100px 0 0 0;
    }
    @media (max-width: 650px) {
        margin: 0px;
    },

`;
class Intro extends Component{
    render(){
        const {config} = this.props;
        return(
            <div>
                <PaperWrapper>
                    <Paper>
                    <IntroWrapper>I'm  the introduction of this site.</IntroWrapper>
                    <Route exact path="/react-shop" render={(props) => <Products config={config} />}/>
                </Paper>
            </PaperWrapper>
            </div>
        );
    }
};

export default Intro;
