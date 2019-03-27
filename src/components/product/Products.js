import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import test from './IMG_20190215_152601.jpg';
import Grid from '@material-ui/core/Grid';
import test2 from './IMG_20180807_164722.jpg'

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

class Products extends Component{
    render(){
        return(
            <div style={styles.products}>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <Link to="#" style={styles.title}>
                        <img src={test} style ={styles.pic}/>
                        <div style={styles.title}>Barf</div>
                        </Link>
                    </Grid>

                    <Grid item xs={6}>
                        <Link to="#" style={styles.title}>
                        <img src={test} style ={styles.pic}/>
                        <div style={styles.title}>I'm the product.</div>
                        </Link>
                    </Grid>

                    <Grid item xs={4} >
                        <Link to="#" >
                        <img src={test} style ={styles.pic}/>
                        <div style={styles.title}>I'm the product.</div>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container spacing={12}>
                    <Grid item xs={6}>
                    <img src={test2} style ={styles.pic}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
};

export default Products;
