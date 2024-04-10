'use client'

import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Switch from "@mui/material/Switch";

import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});


export const theme = createTheme({

    components: {
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    color: "#C0E3E5",
                },
                colorPrimary: {
                    "&.Mui-checked": {
                        color: "#C0E3E5"
                    }                   

                },
                
                track: {
                    opacity: 1,
                    backgroundColor: "#01787E",
                    ".Mui-checked.Mui-checked + &": {
                        opacity: 1,
                        backgroundColor: '#5AB9BF'
                    }
                }
            }
        }
    }
});


export const BootstrapButton = styled(Button)({
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

export const MainButton = styled(Button)<ButtonProps>(({ }) => ({
    boxShadow: 'none',
    color: '#FFF',
    borderRadius: '1rem',
    backgroundColor: '#FF6300',
    padding: '0 36px 0 36px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#FF6300',
    },
}));

export const SecondaryButton = styled(Button)<ButtonProps>(({ }) => ({
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

    '&:hover': {
        backgroundColor: '#FFF',
    },
}));

export const SwitchMain = styled(Switch)<ButtonProps>(({ }) => ({


}));
