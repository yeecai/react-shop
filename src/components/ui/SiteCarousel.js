import React, {Component} from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
import {Link} from 'react-router-dom';

const Pic = styled.img`
    padding:0;
    width:100%;
    height:100%;
}
`;
const SidePicBar = styled.div`
width:10%;
height:10%;
`;

const SidePic = styled.img`
    height:100%;
    width:100%;
`;

const together  = styled.div``;

class SiteCarousel extends Component{
    state = {
        biggest: 'none'
    };

    pickImage(biggest) {
        this.setState({ biggest });
        console.log(biggest);
        console.log(this.state.biggest)
    }
    render(){
        const {photoss}  = this.props;
        this.state.biggest=photoss[0];
        const styles = {
          slide: {
            padding: 15,
            minHeight: 100,
            color: '#fff',
          },
          slide1: {
            background: '#FEA900',
          },
          slide2: {
            background: '#B3DC4A',
          },
          slide3: {
            background: '#6AC0FF',
          },
        };

        return(
            <together>
                <SidePicBar>
                {photoss.map((each)=>{
                    return(
                            <SidePic onClick={()=>this.pickImage(each)} src={require(`../../assets/${each}`)}/>
                            )
                })}
                {/*<Pic src={require(`../../assets/${this.state.biggest}`)}/>*/}
                </SidePicBar>
            </together>
        )
    }
};
export default SiteCarousel;
{/*<SwipeableViews>
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
        slide n°1
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide2)}>
        slide n°2
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide3)}>
        slide n°3
    </div>
</SwipeableViews>*/}
{/*
    <SwipeableViews>
        {photoss.map((each,i)=>
        <div><Pic src={require(`../../assets/${each}`)}/></div>)}
    </SwipeableViews>*/}
    {/*It doesn't work for screen larger than Ipad, firgure out later*/}
