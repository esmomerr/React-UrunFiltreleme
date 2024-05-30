import { InputAreaProps } from './types'
import { useEffect } from 'react';
import { Checkbox, TextField, Typography, Stack } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const InputArea = ({inputValue, setInputValue, isProductInstock, setIsProductInstock} : InputAreaProps) => {

  useEffect(() => {}, [isProductInstock, inputValue]);

  return (
    <Stack>
      <TextField
        label='Search Filter'
        variant='standard'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Stack
        direction='row'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Checkbox {...label} checked={isProductInstock} onChange={(e) => setIsProductInstock(e.target.checked)}/>
        <Typography variant='body1' component='span'>
          Only show products in stock
        </Typography>
      </Stack>
    </Stack>
  );
};
