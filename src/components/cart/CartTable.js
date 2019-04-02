import React, {Component} from 'react';
import styled from 'styled-components';

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
class CartTable extends Component {
    //{/*const {items} = this.props;*/}
    render(){
        return (
            <CartAndTable>
                <h1>Cart</h1>
                    <Table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.items.map((each,i) =>
                                <tr>
                                    <td>
                                        <ImageAndName>
                                            <Pic src={require(`../../assets/${each.url}/${each.pic}`)}/>
                                            <Name>{each.name}</Name>
                                        </ImageAndName>
                                    </td>
                                    <td>1</td>
                                    <td>{each.price}</td>
                                    <td><span onClick={() => this.props.removeItem(i)}>x</span></td>
                                    {/*<td><span onClick={() => alert("haha")}>x</span></td> works*/}
                                </tr>
                            )
                        }
                        </tbody>
                    </Table>
            </CartAndTable>
            )
    }
}
export default CartTable;
{/*<tr><td>hhh</td></tr> <image src={require(each.pic)}/> <img src={require(`../../assets/{each.url}/{each.pic}`)}/>
//{/*<img src={require(`../../assets/${each.url}/${each.pic}`)}/>*/}
//{/*<tr><td><img src="../../../assets/{each.url}/{each.pic}"/></td></tr>*/}
//<img src=require({"../home/lilian/react/react-shop/src/assets/p1/00.jpg"})/>
//<p>{each.url}/{each.pic}</p>
//<img src="/static/media/00.4e34cd2c.jpg"/>*/}
{/*after all those tries!!!turns out its my browser's problem!!!
{`../../assets/${each.url}/${each.pic}`}
    */}
