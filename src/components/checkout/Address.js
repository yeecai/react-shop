import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const InfoTextField = styled.div`
    > div{padding:5px;}
`;

class Address extends Component{
    state={
        email:"",
        streeaddress:"",
        firstname:"",
        lastname:"",
        city:"",
        statename:"",
        zip:""
    };


    render(){
        return(
                <InfoTextField>
                    <h2> Shipping Address</h2>

                    <TextField
                        label="First Name"
                        value={this.state.firstname}
                    />
                    <TextField
                        label="Last Name"
                        value={this.state.lastname}
                    />
                    <TextField
                        autoComplele="emailo"
                        label="Email"
                        value={this.state.mail}
                        fullWidth
                    />
                     <TextField
                        label="City"
                        value={this.state.city}
                    />
                    <TextField
                        label="State"
                        value={this.state.statename}
                    />
                    <TextField
                            label="Zip"
                            value={this.state.zip}
                        />
                    <TextField style={{ paddingBottom:"10px"}}
                           label="Street Addres"
                           value={this.state.streeaddress}
                           fullWidth
                     />
                <Button  color="default" variant="raised">Complete Order</Button>
                    </InfoTextField>

            )
    }

}

export default Address;
