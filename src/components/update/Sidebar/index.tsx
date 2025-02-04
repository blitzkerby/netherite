import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Toolbar, Typography } from '@mui/material';
import { Home, Settings, Info } from '@mui/icons-material';

interface SidebarProps {
    open: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Sidebar
                </Typography>
            </Toolbar>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Info />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
