import React from 'react';
import {Grid} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const CheckBoxInput = (props) => {

    const content = props.value.attributes.map((item)=>{

        return (
        <FormControlLabel
        key={item.id}
        control={<Checkbox color="primary" id={item.id} onChange={props.change} 
        value={item.value}/>}
        label={item.label}
        labelPlacement="start"
        />
        );

    });


    return(
        <Grid item {...props.value.gridSize}>
                <FormLabel component="legend">{props.value.label}</FormLabel>
                {content}
        </Grid>
    );
   

}

export default CheckBoxInput;