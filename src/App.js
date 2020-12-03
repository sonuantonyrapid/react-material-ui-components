import React,{useState} from 'react';

import {Paper} from '@material-ui/core';

import InputFields from './components/InputFields/InputFields'; 

import './App.css';


function App() {

  const fields = [
    {
        id:'name',
        label:'Name',
        attributes:{
            id:'name',
            type:'text'
        },
        fieldType:'input',
        gridSize:{
           xs:12,
           sm:6
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
      fieldType:'input',
      gridSize:{
         xs:12,
         sm:6
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
      fieldType:'checkBox',
      gridSize:{
         xs:12,
         sm:6
      },
      value:''

    }
  ];

  const [fieldsState,setFieldsState] = useState(fields);

  const fieldHandeler = (id,value)=>{

    alert(id);

    const fieldsStateUpdate = [...fieldsState];

    fieldsStateUpdate.forEach((item,index)=>{

      if(item.id === id){

        fieldsStateUpdate[index].value = value;

      }

    });

    console.log(fieldsStateUpdate);

    setFieldsState(fieldsStateUpdate);

  };

  return (
    <Paper className="Paper">
    <InputFields fields={fieldsState} change={fieldHandeler}/>
    </Paper>
  );
}

export default App;
