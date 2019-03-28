import React, { Component } from 'react';
import styled from 'styled-components';

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
        return(
            <IntroWrapper>I'm  the introduction of this site.</IntroWrapper>
        );
    }
};

export default Intro;
