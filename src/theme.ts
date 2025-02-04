import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light', // or 'dark' for dark mode
        primary: {
            main: 'hsl(0, 70%, 50%)',
            contrastText: 'hsl(0, 0%, 98%)',
        },
        secondary: {
            main: 'hsl(0, 50%, 30%)',
            contrastText: 'hsl(0, 0%, 98%)',
        },
        error: {
            main: 'hsl(0, 80%, 50%)',
            contrastText: 'hsl(0, 0%, 98%)',
        },
        background: {
            default: 'hsl(0, 10%, 10%)',
            paper: 'hsl(0, 10%, 15%)',
        },
        text: {
            primary: 'hsl(0, 0%, 98%)',
            secondary: 'hsl(0, 0%, 80%)',
        },
    },
    shape: {
        borderRadius: 8, // Customize border radius
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif', // Customize font family
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    '&.MuiOutlinedButton-root': {
                        borderColor: 'hsl(0, 30%, 25%)',
                    },
                    '&:hover': {
                        backgroundColor: 'hsl(0, 60%, 40%)',
                        color: 'hsl(0, 0%, 98%)',
                    },
                    borderRadius: '0.5rem',
                },
            },
        },
    },
});

export default theme;
