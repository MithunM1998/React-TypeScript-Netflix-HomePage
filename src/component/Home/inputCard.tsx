import React from 'react';
import { inputs } from './Autocomplete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
type inputProps={
    user:inputs;
}
 export const InputCards: React.FC<inputProps> = ({ user }) =>{
   
       return  <Box sx={{ minWidth: 200 }}><Card variant="outlined"><CardContent> <><h3>{user.userinput}</h3></></CardContent></Card></Box> ;
    
}