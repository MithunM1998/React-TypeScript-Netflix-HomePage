import React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const movieLabels = [
  { label: 'Indra', color: 'primary' },
  { label: 'KGF', color: 'secondary' },
  { label: 'SALAAR', color: 'success' },
  { label: 'RRR', color: 'default' },
  { label: 'PUSHPA', isCustomColor: true }, // Use a flag for custom color
];

export const QA2 = () => {
  const [checked, setChecked] = React.useState([false, false, false, false, false]);

  const handleChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedChecked = [...checked];
    updatedChecked[index] = event.target.checked;
    setChecked(updatedChecked);
  };

  const handlenavigate = () => {
    const selectedMovies = movieLabels
      .filter((_, index) => checked[index])
      .map(movie => movie.label);
    alert(`Selected Movies: ${selectedMovies.join(', ')}`);
  };

  return (
    <div>
      <h3>Select your favorite movies here</h3>
      {movieLabels.map((movie, index) => (
        <Checkbox
          key={movie.label}
          checked={checked[index]}
          onChange={handleChange(index)}
        
          sx={movie.isCustomColor ? {
            color: pink[800],
            '&.Mui-checked': { color: pink[600] },
          } : {}}
          inputProps={{ 'aria-label': movie.label }}
        />
      ))}
      <Button 
        sx={{ m: 1, width: '35ch' }} 
        variant="contained" 
        onClick={handlenavigate}
      >
        Next
      </Button>
    </div>
  );
};
