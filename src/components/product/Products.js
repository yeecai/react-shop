import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import config from '../../assets/store_config';
import Grid from '@material-ui/core/Grid';
import test from '/home/lilian/react/react-shop/src/assets/p1/IMG_20190215_152601.jpg';
{/*import test2 from './IMG_20180807_164722.jpg'*/}

const styles = theme =>({
    pic:{
        padding:'0',
        width:"100%",
        height:"100%"
    },
    product:{
        padding: theme.spacing.unit* 2,
        position:'relative',

    },
    products:{
        position:'relative',
        padding:'10px',
        flexGrow: 1,
        textDecoration: 'none',
        margin: '9px 19px 9px 9px',
    },
    title:{
        textDecoration: 'none',
        color:'black'
    }
});

class Products extends Component{
    render(){
        const {classes} = this.props
        const listItems = config.productsinfo.map((each) =>
        <Grid item xs={6}>
            <Paper className={classes.product}>
                <Link to="#" className ={classes.title}>
                    <img src={require(`../../assets/${each.photos[0]}`)} alt={each.name} className ={classes.pic}/>
                    <div>{each.name}</div>
                    <div>{each.price}</div>
                </Link>
            </Paper>
        </Grid>

          );
        return(
            <div className={classes.products}>
                <Grid container spacing={24} >{listItems}</Grid>
            </div>
        );
    }
};

export default withStyles(styles)(Products);
