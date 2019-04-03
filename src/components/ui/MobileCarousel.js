import React, {Component} from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';

const Pic = styled.img`
    padding:0;
    width:100%;
    height:100%;
}
`;

class MobileCarousel extends Component{
    render(){
        const { photos,url } = this.props;
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
            <div>
                <p>Swipe me!</p>
                    <SwipeableViews>
                        {photos.map((each,i)=>
                        <div><Pic src={require(`../../assets/${url}/${each}`)}/></div>)}
                    </SwipeableViews>
            </div>
        )
    }
};
export default MobileCarousel;
{/*
<SwipeableViews>
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
        slide n°1
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide2)}>
        slide n°2
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide3)}>
        slide n°3
    </div>
</SwipeableViews>
*/}
