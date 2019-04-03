import React, {Component} from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Description = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
`;

class ProductInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            amount:this.props.amount
        }
    }

    handleChange = name => event =>{
        this.setState({[name]:event.target.value})
    }
    render(){
        const { me } = this.props;
        return(
            <div style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
            <div>{me.name}</div>
            <Description>{me.description}</Description>
            <p>£{me.price}</p>
            <TextField
                value={this.state.amount}
                type="number"
                margin="normal"
                onChange={this.handleChange('amount')}
                style={{ width:"30px" }}
            />
            <Button color="default" variant="raised"
                    onClick={() => this.props.addToCart(this.state)}>Add To Cart</Button>
            </div>
        )
    }
}
export default ProductInfo;
{/*<Button variant="raised" color="primary"
// onClick={() => this.props.addToCart(this.state)}
//>*/}
