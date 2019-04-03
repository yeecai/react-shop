import React, {Component} from 'react';
import styled from 'styled-components';
import { Route, Link, Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import CartTable from './CartTable';

const Together  = styled.div`
    padding: 10px;
`;

const SubAndCheck = styled.div`
    text-align: right;
`;

const Sub = styled.div`
`;

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[],
        };
    }

    componentDidMount(){
        const slug=`${this.props.config.store_slug}`
        let items = JSON.parse(localStorage.getItem(slug));
        this.setState(
            {items :items ? items:[]}
        )
    }



    updateItems = (items) =>{
        const slug=`${this.props.config.store_slug}`;
        this.setState({items});
        localStorage.setItem(slug, JSON.stringify(items));
    }

    removeItem = (index) =>{
        let items = [...this.state.items];
        items.splice(index, 1);
        this.updateItems(items);
    }

    updateAmount = (index,value) =>{
        let items = [...this.state.items]
        items[index].amount = value
        this.updateItems(items);
    }

    render(){
        let subTotal;
        if(this.state.items.length){
            subTotal = this.state.items
            .map(e =>(e.amount*e.price))
            .reduce((a,b) => a+Number(b))
        }
        return (
            <Together>
                <CartTable
                    items={this.state.items}
                    config={this.props.config}
                    removeItem={this.removeItem}
                    updateAmount={this.updateAmount}
                />
                <SubAndCheck>
                    <Sub>Subtotal:£{subTotal}</Sub>
                    <Link to={`/${this.props.config.store_slug}/checkout`}><Button color="default" variant="raised">Checkout</Button></Link>
                </SubAndCheck>
            </Together>
        )
    }
}
export default Cart;
{/*<tr><td>hhh</td></tr> <image src={require(each.pic)}/> <img src={require(`../../assets/{each.url}/{each.pic}`)}/>
//{/*<img src={require(`../../assets/${each.url}/${each.pic}`)}/>*/}
//{/*<tr><td><img src="../../../assets/{each.url}/{each.pic}"/></td></tr>*/}
//<img src=require({"../home/lilian/react/react-shop/src/assets/p1/00.jpg"})/>
//<p>{each.url}/{each.pic}</p>
//<img src="/static/media/00.4e34cd2c.jpg"/>*/}
{/*after all those tries!!!turns out its my browser's problem!!!
{`../../assets/${each.url}/${each.pic}`}
    */}
