import React, {Component} from 'react';
import styled from 'styled-components';

const Pic = styled.img`
    // background-image: url("https://www.insidescience.org/sites/default/files/sites/default/files/images/articles/top-images/2018/5_heic1808a_crop.jpg");
    // background:url("/static/media/00.4e34cd2c.jpg"); // This one works!!
    // background-image: url(${props=>props.img})
    // background:url("/home/lilian/react/react-shop/src/assets/p1/00.jpg");
    // why those not working except https!!!
    //background-image: url("../../assets/p1/00.jpg");
//    background-image: url(00.jpg);
// never mind, url() never work for me - - !
    padding:0;
    width:125px;
    height:125px;
    object-fit: cover; // same square effect!
}
`;
const Table =styled.table`

    thead > tr > th{
        font-weight: normal;
        text-align: left;
    }
`;

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
            <Table>
                <thead><tr><th>Product</th><th>Amount</th><th>Total</th><th></th></tr></thead>
                <tbody>
                {this.state.items.map((each) =>
                        <tr><td><Pic src={require(`../../assets/${each.url}/${each.pic}`)}/></td><td>{each.name}</td></tr>
                        // <tr><td><Pic/></td><td>{each.name}</td></tr>

                    )
                }
                </tbody>
            </Table>
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
{/*after all those tries!!!turns out its my browser's problem!!!
{`../../assets/${each.url}/${each.pic}`}
    */}
