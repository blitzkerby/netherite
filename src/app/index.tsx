import React, { useState } from 'react';
import { CssBaseline, AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Sidebar from '@/components/update/Sidebar'; // Adjust the import path as necessary
import FileGrid from '@/components/update/FileGrid/FileGrid';

import "./App.css"

const App: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarOpen = () => {
        setSidebarOpen(true);
    };

    const handleSidebarClose = () => {
        setSidebarOpen(false);
    };

    return (
        <div>
            <AppBar>
                <Toolbar className="update-appbar-container">
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleSidebarOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Netherite
                    </Typography>
                </Toolbar>
            </AppBar>
            <Sidebar open={sidebarOpen} onClose={handleSidebarClose} />
            <main style={{ padding: '16px', marginTop: '64px' }}>

            </main>
        </div>
    );
};

export default App;
