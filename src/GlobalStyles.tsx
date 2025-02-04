import { GlobalStyles as MUIGlobalStyles } from '@mui/material';
import React from 'react';

const GlobalStyles = () => {
    return (
        <MUIGlobalStyles
            styles={{
                ':root': {
                    '--background': '0 10% 10%',
                    '--foreground': '0 0% 98%',
                    '--card': '0 10% 15%',
                    '--card-foreground': '0 0% 98%',
                    '--popover': '0 10% 15%',
                    '--popover-foreground': '0 0% 98%',
                    '--primary': '0 70% 50%',
                    '--primary-foreground': '0 0% 98%',
                    '--secondary': '0 50% 30%',
                    '--secondary-foreground': '0 0% 98%',
                    '--muted': '0 20% 20%',
                    '--muted-foreground': '0 0% 80%',
                    '--accent': '0 60% 40%',
                    '--accent-foreground': '0 0% 98%',
                    '--destructive': '0 80% 50%',
                    '--destructive-foreground': '0 0% 98%',
                    '--border': '0 30% 25%',
                    '--input': '0 30% 25%',
                    '--ring': '0 70% 50%',
                    '--radius': '0.5rem',
                },
                '*': {
                    border: '1px solid hsl(var(--border))',
                },
                body: {
                    backgroundColor: 'hsl(var(--background))',
                    color: 'hsl(var(--foreground))',
                },
                '.file-grid-item': {
                    backgroundColor: 'hsl(var(--card))',
                    color: 'hsl(var(--card-foreground))',
                },
                '.sidebar-button': {
                    '&:hover': {
                        backgroundColor: 'hsl(var(--accent))',
                        color: 'hsl(var(--accent-foreground))',
                    },
                },
                '.fiery-highlight': {
                    position: 'relative',
                    overflow: 'hidden',
                },
                '.fiery-highlight::after': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, hsl(var(--primary))/20, transparent)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-out',
                },
                '.fiery-highlight:hover::after': {
                    opacity: 1,
                },
            }}
        />
    );
};

export default GlobalStyles;
