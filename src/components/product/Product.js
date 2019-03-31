//productpage craousel+detail
import React, {Component} from 'react';
import MobileCarousel from '../ui/MobileCarousel';
import SiteCarousel from '../ui/SiteCarousel';
import ProductInfo from './ProductInfo';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';


class ProductDetailPage extends Component{

    render(){
        const { me } = this.props;
        {/*alert(me.photos);*/}
        const photos = me.photos;
        const photoList = photos.map((each,i)=>
            <li><img src={require(`../../assets/${each}`)}/></li>
        );

        let carousel;
        if (isWidthDown('xs', this.props.width)){
            carousel = <MobileCarousel photos={photos}/>;
        }else{
            carousel = <SiteCarousel photos={photos}/>;
        }

        return(
            <div>
                {carousel}
                <ProductInfo me={me}/>
            </div>
        );
    }
}

export default withWidth()(ProductDetailPage);
