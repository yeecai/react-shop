//Home page, intro+all products
import React, { Component } from 'react';
import styled from 'styled-components';
import Products from './product/Products';
import Paper from '@material-ui/core/Paper';

import { Link, Route, BrowserRouter as Router} from 'react-router-dom';

const IntroWrapper = styled.ul`
    height:200px;
    font-size:20px;
    background: #346a5d;
    align-items: center;
    justify-content: center;
    display: flex;
    padding:40px;
    @media (min-width: 650px) {
      filter: grayscale(100%);
      transition: filter .5s;
      &:hover {
        filter: grayscale(0.1);
      }
    @media (max-width: 650px) {
        background: white ;
        font-size:20px;

    }
    >p{
        text-decoration:none
    }
`;

class Intro extends Component{
    render(){
        const {config} = this.props;
        return(
            <div>
                <IntroWrapper>
                    <ul style={{listSylte:'none'}}>
                    <li>图片出自 <a href="https://www.dpm.org.cn/Home.html" style={{textDecoration:'none'}}>故宫博物馆</a></li>
                    <li>Photos by <a href="https://www.dpm.org.cn/Home.html" style={{textDecoration:'none'}}>The Palace Museum </a> <br/></li>
                    </ul>
                </IntroWrapper>
                <Route exact path="/react-shop" render={(props) => <Products config={config} />}/>

            </div>
        );
    }
};

export default Intro;
