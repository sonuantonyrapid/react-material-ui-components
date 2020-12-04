import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const RadioInput = (props) => {

    // const [value, setValue] = React.useState('female');

    const content = props.value.attributes.map(item=>{
        
        return(
            <FormControlLabel {...item} control={<Radio id={item.id} />}/>
        );

    });

    // const handleChange = (event) => {
    // //   setValue(event.target.value);
    // props.change(event);
    // };
  
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">{props.value.label}</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={props.value.value} onChange={props.change}>
            {content}
        </RadioGroup>
      </FormControl>
    );


}

export default RadioInput;