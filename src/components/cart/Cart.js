import React, {Component} from 'react';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[]
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
            <thead>Okay I may missed sth, the images are broken.</thead>
            <tbody>
            {this.state.items.map((each) =>
                    <tr><td><img src={require(`../../assets/${each.url}/${each.pic}`)}/></td></tr>
                )
            }
            </tbody>
            </table>
            </div>
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
{/*after all those tries!!!turns out its my browser's problem!!!*/}
