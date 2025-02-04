import React, { useState } from 'react';
import { CssBaseline, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Sidebar from '@/components/update/Sidebar'; // Adjust the import path as necessary

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
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleSidebarOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        My App
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
