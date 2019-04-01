import React, {Component} from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';


const Description = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
`;

class ProductInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            quantity:this.props.quantity
        }
    }

    render(){
        const { me } = this.props;
        return(
            <div style={{ gridColumn: "span 2" }}>
            <Link to="#">I'm {me.name}</Link>
            <Description>{me.description}</Description>

         <button onClick={() => this.props.addToCart(this.state)}>Add To Cart</button>
            </div>
        )
    }
}
export default ProductInfo;
{/*<Button variant="raised" color="primary"
// onClick={() => this.props.addToCart(this.state)}
//>*/}
