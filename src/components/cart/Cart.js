import React, {Component} from 'react';
import styled from 'styled-components';
import CartTable from './CartTable';

const Pic = styled.img`
    // background-image: url("https://www.insidescience.org/sites/default/files/sites/default/files/images/articles/top-images/2018/5_heic1808a_crop.jpg");
     // This one works!!
    // background:url("/static/media/00.4e34cd2c.jpg"); // This one works!!
    // background-image: url(${props=>props.img})
    // background:url("/home/lilian/react/react-shop/src/assets/p1/00.jpg");
    // background-image: url("../../assets/p1/00.jpg");
    // background-image: url(00.jpg);

    // why those not working except https!!!
    // never mind, url() never work for me - - !

    padding:0;
    width:125px;
    height:125px;
    object-fit: cover; // same square effect!
    @media (max-width: 650px) {
        width:65px;
        height:80px;
        object-fit: cover;
    }
}
`;
const Table =styled.table`
    width:100%;
    border-collapse: collapse;
    thead > tr > th{
        font-weight: normal;
        text-align: left;
        border-bottom: 1px solid grey;
        padding:10px;
    }

    tbody > tr > td {
        padding: 10px;
        margin-left: px;
        border-bottom: 1px solid #afb1a3;
    }
    padding:10px;
`;
const ImageAndName = styled.div`
  display: flex;
  align-items: center;
`;
const Name = styled.div`
    justify-content: center;
    margin-left: 30px;
    margin-bottom: 10px;
    @media (max-width: 650px) {
        margin-left: 10px;
    }

`;
const CartAndTable = styled.div`
    //padding:10px;
    margin: 0 30px 0 30px;
    @media (max-width: 650px) {
        margin:0;
    }

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
        return (
            <CartTable
                items={this.state.items}
                config={this.props.config}
                removeItem={this.removeItem}
                updateAmount={this.updateAmount}
            />
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
