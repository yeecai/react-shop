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
    handleChange = (name, value) => {
      this.setState({ [name] : value });
    }

    render(){
        return(
                <InfoTextField>
                    <h2> Shipping Address</h2>

                    <TextField
                        label="First Name"
                        value={this.state.firstname}
                         onChange={(e) => this.handleChange('firstname', e.target.value)}
                    />
                    <TextField
                    autoComplete="family-name"
                        label="Last Name"
                        value={this.state.lastname}
                         onChange={(e) => this.handleChange('lastname', e.target.value)}
                    />
                    <TextField
                        autoComplele="emailo"
                        label="Email"
                        value={this.state.mail}
                         onChange={(e) => this.handleChange('email', e.target.value)}
                        fullWidth
                    />
                     <TextField
                        label="City"
                        value={this.state.city}
                         onChange={(e) => this.handleChange('city', e.target.value)}
                    />
                    <TextField
                        label="State"
                        value={this.state.statename}
                         onChange={(e) => this.handleChange('statename', e.target.value)}
                    />
                    <TextField
                            label="Zip"
                            value={this.state.zip}
                            onChange={(e) => this.handleChange('zip', e.target.value)}
                        />
                    <TextField style={{ paddingBottom:"10px"}}
                           label="Street Addres"
                           value={this.state.streeaddress}
                           fullWidth
                         onChange={(e) => this.handleChange('streeaddress', e.target.value)}
                     />
                <Button  color="default" variant="raised">Complete Order</Button>
                    </InfoTextField>

            )
    }

}

export default Address;
