import React from 'react';

import {Grid,FormControl} from '@material-ui/core';

import Input from '../UI/Input/Input';

import CheckBox from '../UI/CheckBox/CheckBox';

// import InputFieldsStyle from './InputFields.module.css';


const InputFields = React.memo((props) => {

    const updateHandeler = (event) => {

        props.change(event.target.id,event.target.value);
        
    }

    const inputContent = props.fields.map(value=>{

           switch(value.fieldType){
                case 'input':
                    return <Input value={value} key={value.id} change={updateHandeler}/>;
                case 'checkBox':
                    return <CheckBox value={value} key={value.id} change={updateHandeler}/>;
                default:
                   return;
           }

       }); 

   return(
           <Grid container spacing={2}>
               {inputContent}
           </Grid>
   );


});

export default InputFields;