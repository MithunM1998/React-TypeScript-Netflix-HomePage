import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Register:React.FC=()=>{

    const[names,setName]=useState('');
    const[mobile,setMobile]=useState('');
    const[dob,setDob]=useState('');
    const[addresss,setAddress]=useState('');

    const handleRegister = () => {
        const namePattern = /^[A-Za-z\s]+$/; // Allow letters and spaces
        const mobilePattern = /^[0-9]{10}$/; // Only digits, 10 characters

        if (!names || !namePattern.test(names)) {
            alert('Please enter a valid name.');
            return;
        }

        if (!mobile || !mobilePattern.test(mobile)) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }

        if (!dob) {
            alert('Please enter your date of birth.');
            return;
        }

        if (!addresss) {
            alert('Please enter your address.');
            return;
        }

        alert('Success');
    };
    return(
        <div>
            <h1>Register!!!!!</h1>
        <TextField
        sx={{ m: 1, width: '35ch' }}
        id="outlined-basic"
        label="name"
        variant="outlined"
        color='secondary'
        name="name"
        value={names}
        onChange={(e)=>setName(e.target.value)}
    />
    <TextField
    sx={{ m: 1, width: '35ch' }}
    id="outlined-basic"
    label="mobile"
    variant="outlined"
    color='secondary'
    name="mobile"
    value={mobile}
    onChange={(e)=>setMobile(e.target.value)}
/>
<TextField
    sx={{ m: 1, width: '35ch' }}
    id="outlined-basic"
    label="dob"
    variant="outlined"
    color='secondary'
    name="dob"
    value={dob}
    onChange={(e)=>setDob(e.target.value)}
/>
<TextField
    sx={{ m: 1, width: '35ch' }}
    id="outlined-basic"
    label="Address"
    variant="outlined"
    color='secondary'
    name="Address"
    value={addresss}
    onChange={(e)=>setAddress(e.target.value)}
/>
<Button 
                        sx={{ m: 1, width: '35ch' }} 
                        variant="contained" 
                        onClick={handleRegister}
                    >
                        Save
                    </Button>
</div>
    )
}