import React from 'react';

import {Grid,TextField} from '@material-ui/core';

const Input = (props) => {

    return(
    <Grid item {...props.value.gridSize}>
        <TextField  id={props.value.id} label={props.value.label} {...props.value.attributes} onChange={props.change}/>
    </Grid>
    );


};

export default Input;