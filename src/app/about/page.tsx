'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { red } from '@mui/material/colors';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  color: '#333',
  textTransform: 'none',
  fontSize: 16,
  borderRadius: '15px',
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#FFF',
  borderColor: '#FF6300',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const OrangeColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: '#FFF',
  borderRadius: '15px',
  backgroundColor: '#FF6300',
  '&:hover': {
    backgroundColor: red[700],
  },
}));

export default function CustomizedButtons() {
  return (
    <Stack spacing={2} direction="row">
      <OrangeColorButton variant="contained">Создать игру</OrangeColorButton>
      <BootstrapButton variant="contained" disableRipple>
        Жеребьевка
      </BootstrapButton>
111
      <Button variant="contained" sx={{
        backgroundColor: 'yellow'
      }}>Создать игру222</Button>

    </Stack>
  );
 }
