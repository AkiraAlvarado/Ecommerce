import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
      background: {
        paper: '#1d1d1d',
        default: '#121212',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <FormControl
        sx={{
          m: 1,
          minWidth: 120,
          backgroundColor: '#333',
          borderColor: '#555',
        }}
        size="small"
      >
        <InputLabel id="demo-select-small-label" sx={{ color: '#fff' }}>
          Age
        </InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{
            backgroundColor: '#333',
            color: '#fff',
            borderColor: '#555',
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: '#555',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fff',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#bbb', // Cambia el color del borde a gris cuando está enfocado
            },
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}