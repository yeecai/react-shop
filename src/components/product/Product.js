//productpage craousel+detail
import React, {Component} from 'react';
import MobileCarousel from '../ui/MobileCarousel';
import SiteCarousel from '../ui/SiteCarousel';
import ProductInfo from './ProductInfo';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 40px;
    @media (max-width: 650px) {
        grid-template-columns: repeat(1, 1fr);
    }

`;

class ProductDetailPage extends Component{
    state = {
        amount:1
    };


    addToCart = (state) =>{ //state=quantity
        const { me,config } = this.props;
        const slug = `${config.store_slug}`;
        let items = JSON.parse(localStorage.getItem(slug));
        items = Array.isArray(items) ?items: [];

        // Here check if the item in items add amount else add item
        const itemIndex = items.findIndex(e=> e.name===me.name);

        if (itemIndex >= 0){
        // console.log(items[itemIndex].amount);
//             var itemAmout = Number(items[itemIndex].amount)
// //            console.log(itemAmout);
//             itemAmout += Number(this.state.amount);
//             console.log(me.amount);
//             items[itemIndex].amount = itemAmout;
            items[itemIndex].amount += state.amount;
        }
        else {
            const item = {
                pic:me.photos[0],
                url:me.url,
                name:me.name,
                price:me.price,
                amount:state.amount
            };
            items.push(item)
        }
        localStorage.setItem(slug, JSON.stringify(items));
    }


    render(){
        const { me } = this.props;
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
            <Grid>
                <div style={{ gridColumn:"span 3", padding:"10px"}}>
                {carousel}
                </div>
                <ProductInfo
                    me={me}
                    amount={this.state.amount}
                    addToCart={this.addToCart}
                    style={{ gridColumn: "span 2"}}
                />
            </Grid>
        );
    }
}

export default withWidth()(ProductDetailPage);
