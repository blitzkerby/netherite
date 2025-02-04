import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import React from 'react';

function Appbar() {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    My App
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Appbar;
