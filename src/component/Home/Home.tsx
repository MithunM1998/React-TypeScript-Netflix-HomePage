import React from 'react';
import { User } from '../../types/User';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
type UserProps={
    user:User;
}
 export const UserCard: React.FC<UserProps> = ({ user }) =>{
   
       return  <Box sx={{ minWidth: 275 }}><Card variant="outlined"><CardContent> <><h3>{user.name}</h3><p>{user.email}</p></></CardContent></Card></Box> ;
    
}