import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import config from '../../assets/store_config';
import Grid from '@material-ui/core/Grid';
import test from '/home/lilian/react/react-shop/src/assets/p1/IMG_20190215_152601.jpg';
{/*import test2 from './IMG_20180807_164722.jpg'*/}
const numbers = [1, 2, 3, 4, 5];




const styles = ({
    pic:{
        padding:'0',
        width:"100%",
        height:"100%"
    },
    products:{
        display: 'grid',
        margin: '100px 20px 100px 10px',
    },
    title:{
        textDecoration: 'none',
    }
});
const listItems = config.productsinfo.map((each) =>
    <Grid item xs={6}>
        <Link to="#" style={styles.title}></Link>
        <img src={require(`../../assets/${each.photos[0]}`)} style ={styles.pic}/>
        <div style={styles.title}>{each.name}</div>
    </Grid>

  );
class Products extends Component{

    render(){
        return(
            <Grid container spacing={12}>{listItems}</Grid>
        );
    }
};

export default Products;
