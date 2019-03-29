import React, { Component } from 'react';
import styled from 'styled-components';
import Products from './product/Products';
import { Link, Route, BrowserRouter as Router} from 'react-router-dom';

const IntroWrapper = styled.div`
    height:200px;
    font-size:30px;
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

class Intro extends Component{
    render(){
        const {config} = this.props;
        return(
            <div>
            <IntroWrapper>I'm  the introduction of this site.</IntroWrapper>
            <Route exact path="/react-shop" render={(props) => <Products config={config} />}/>
            </div>
        );
    }
};

export default Intro;
