//productpage craousel+detail
import React, {Component} from 'react';
import MobileCarousel from '../ui/MobileCarousel';
import SiteCarousel from '../ui/SiteCarousel';
import ProductInfo from './ProductInfo';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';


class ProductDetailPage extends Component{
    state = {
        quantity:1
    };


    addToCart = (state) =>{ //state=quantity
        const { me,config } = this.props;
        const slug = `${config.store_slug}`;
        let items = JSON.parse(localStorage.getItem(slug));
        items = Array.isArray(items) ?items: [];

        const item = {
            pic:me.photos[0],
            url:me.url,
            name:me.name,
            price:me.price,
            quantity:state.quantity
        };
        items.push(item)
        localStorage.setItem(slug, JSON.stringify(items));
        {/*this.props.updateNumber(items.length)*/}
        {/*this.props.history.push("/cart");*/}
    }

    render(){
        const { me } = this.props;
        {/*alert(me.photos);*/}
        const photos = me.photos;
        const photoList = photos.map((each,i)=>
            <li><img src={require(`../../assets/${me.url}/${each}`)}/></li>
        );

        let carousel;
        if (isWidthDown('xs', this.props.width)){
            carousel = <MobileCarousel photos={photos} url={me.url}/>;
        }else{
            carousel = <SiteCarousel photos={photos} url={me.url}/>;
        }

        return(
            <div>
                {carousel}
                <ProductInfo me={me} addToCart={this.addToCart}/>
            </div>
        );
    }
}

export default withWidth()(ProductDetailPage);
