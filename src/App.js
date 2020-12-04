import React,{useState} from 'react';

import {Paper,Grid} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import InputFields from './components/InputFields/InputFields'; 

import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '2%'
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {

  const classes = useStyles();

  const fields = [
    {
        id:'name',
        label:'Name',
        attributes:{
            id:'name',
            type:'text'
        },
        fieldType:'text',
        gridSize:{
           xs:12
        },
        value:''

    },
    {
      id:'mob',
      label:'Mobile',
      attributes:{
          id:'mob',
          type:'number'
      },
      fieldType:'text',
      gridSize:{
         xs:12
      },
      value:''

    },
    {
      id:'checkAny',
      label:'Check Any',
      attributes:[
          {
            id:'checkAny_1',
            label:'Option 1',
            labelPlacement:'start',
            value:'Option 1'
          },
          {
            id:'checkAny_2',
            label:'Option 2',
            labelPlacement:'start',
            value:'Option 2'
          }
      ],
      fieldType:'checkbox',
      gridSize:{
         xs:12
      },
      value:''

    },
    {
      id:'gender',
      label:'Gender',
      attributes:[
          {
            id:'gender_1',
            label:'Male',
            value:'male'
          },
          {
            id:'gender_2',
            label:'Female',
            value:'female'
          },
          {
            id:'gender_3',
            label:'Other',
            value:'other'
          }
      ],
      fieldType:'radio',
      gridSize:{
         xs:12
      },
      value:'female'

    }
  ];

  const [fieldsState,setFieldsState] = useState(fields);

  const fieldHandeler = (id,type,value)=>{

    const fieldsStateUpdate = [...fieldsState];

    fieldsStateUpdate.forEach((item,index)=>{

      console.log(index);

      if(item.fieldType === type){

        let attributes = [];

        switch(type){
          case 'text':
                if(item.id === id){

                  fieldsStateUpdate[index].value = value;
                  console.log(fieldsStateUpdate);    
                  setFieldsState(fieldsStateUpdate);
                  return;

                }
                break;
          case 'checkbox':
              attributes = [...item.attributes];

              attributes.forEach((item)=>{

                if(item.id === id){

                  fieldsStateUpdate[index].value = value;
                  console.log(fieldsStateUpdate);    
                  setFieldsState(fieldsStateUpdate);

                }

              });
              break;
          case 'radio':
              attributes = [...item.attributes];

              attributes.forEach((item)=>{

                if(item.id === id){

                  fieldsStateUpdate[index].value = value;
                  console.log(fieldsStateUpdate);    
                  setFieldsState(fieldsStateUpdate);

                }

              });

              break;
          default:
            break;
        }

      }


    });

  };

  return (
    <div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <InputFields fields={fieldsState} change={fieldHandeler}/>
        </Paper>
      </Grid>
    </Grid>
  </div>
  );
}

export default App;
