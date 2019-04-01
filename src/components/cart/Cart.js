import React, {Component} from 'react';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:["adas","fasdfs"]
        };
    }

    componentDidMount(){
        const slug=`${this.props.config.store_slug}`;
        let items = JSON.parse(localStorage.getItem(slug));
        this.setState(
            {items :items ? items:[]}
        )
    }
    render(){
        return (
            <div>
            <h1>Cart</h1>
            <table>
            <thead>okay may I missed sth</thead>
            <tbody>
            {this.state.items.map((each) =>
                    <img src={require(`../../assets/${each.url}/${each.pic}`)}/>
                )
            }
            </tbody>
            </table>
            </div>
            )
    }
}
export default Cart;
{/*<tr><td>hhh</td></tr> <image src={require(each.pic)}/> <img src={require(`../../assets/{each.url}/{each.pic}`)}/>*/}
