import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
export const QA1=()=>{
  const   navigate=useNavigate();
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
      
    };
  const handlenavigate=()=>{
    if(value!=='No'){
        navigate('/QA2');
    }else{
        alert("wrong answer!!! try again!!");
    }
  
  }
    return (
      <><FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Are you mad?</FormLabel>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl><div>

            </div>
            <Button 
sx={{ m: 1, width: '35ch' }} 
variant="contained" 
onClick={handlenavigate}
>
Next
</Button></>
    );
}