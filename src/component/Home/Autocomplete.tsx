import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { InputCards } from './inputCard'; 


const options = ['KGF', 'PUSHPA','RRR','INDRA','KALKI','LEO'];
export  type inputs={
    id:number;
    userinput:string;
};
export const Autocompletes=()=>{
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  const [users, setUsers] = React.useState<inputs[]>([]);

  const handleInputs=(newUserinput: string)=>{
    const inpt:inputs={
        id: Date.now(),
        userinput: newUserinput
    };
    setUsers([...users, inpt]);
  }
  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          handleInputs(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      
      />

            <div>
                {
                    users.map(
                        (inputss)=>(
                            <InputCards key={inputss.id} user={inputss}/>
                        )
                    )
                }
            </div>
    </div>
  );
}
