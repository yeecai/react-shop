import React, {Component} from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import MobileCarousel from '../ui/MobileCarousel';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

class ProductDetailPage extends Component{

    render(){
        const { me } = this.props;
        {/*alert(me.photos);*/}
        const photoss = me.photos;
        const photoList = photoss.map((each,i)=>
            <li><img src={require(`../../assets/${each}`)}/></li>
        );

        let carousel;
        if (isWidthDown('xs', this.props.width)){
            carousel = <MobileCarousel photoss={photoss}/>
        }

        return(
            <div>
                {carousel}
                <Link to="/react-shop">I'm {me.name}</Link>
            </div>
        );
    }
}

export default withWidth()(ProductDetailPage);
