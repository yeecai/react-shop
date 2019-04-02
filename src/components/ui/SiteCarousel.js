import React, {Component} from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
import {Link} from 'react-router-dom';



const SidePicBar = styled.div`
    float:left;
    width:20%;
    overflow:hidden;
    padding:0 10px 0 10px;
`;
const BigPic = styled.div`
    float:left;
    width:70%;
    overflow:hidden;
`;
const Pic = styled.img`
     width:100%;
     height:100%;
`;
const SidePic = styled.img`
    width:100%;
    height:50%;
`;

const together  = styled.div`
    display: flex;
    padding: 10px;
`;

class SiteCarousel extends Component{
    state = {
        biggest: this.props.photos[0]
    };

    pickImage = (biggest)=> {
        this.setState({ biggest });
        console.log(biggest);
        console.log(this.state.biggest);
    }
    render(){
        const {photos, url}  = this.props;
        // Get each product's photos and url
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
                {photos.map((each)=>{
                    return(
                            <SidePic onClick={()=>this.pickImage(each)} src={require(`../../assets/${url}/${each}`)}/>
                            )
                })}
                </SidePicBar>
                <BigPic><Pic src={require(`../../assets/${url}/${this.state.biggest}`)}/></BigPic>
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
