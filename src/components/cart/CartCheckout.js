import React, {Component} from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { Route, Link, Redirect } from 'react-router-dom';

const Pic = styled.img`
    width:65px;
    height:65px;
    object-fit: cover;
`;
const Table =styled.table`
    width:100%;
    border-collapse: collapse;

    tbody > tr > td {
        padding: 10px;
        margin-left: px;
    }
    padding:10px;
`;
const ImageAndName = styled.div`
  display: flex;
  align-items: center;
`;

const CartAndTable = styled.div`
    padding:10px;
    margin: 0 30px 0 30px;
    @media (max-width: 650px) {
        margin:10px;
    }

`;
class CartCheckout extends Component {
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
    render(){
        return (
            <div>
                <h2>Summary</h2>
                    <Table>
                        <tbody>
                        {this.state.items.map((each,i) =>
                                <tr>
                                    <td>
                                        <ImageAndName>
                                            <Pic src={require(`../../assets/${each.url}/${each.pic}`)}/>
                                        </ImageAndName>
                                    </td>
                                    <td>
                                        <div>{each.amount}</div>
                                    </td>
                                    <td>£{(each.price*each.amount).toFixed(2)}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </Table>
            </div>
            )
    }
}
export default CartCheckout;
