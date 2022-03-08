import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom";
import TaskNavLinks from './DrawerSections/TaskNavLinks/TaskNavLinks';
import TaskStatus from './DrawerSections/TaskStatus/TaskStatus';
import AssignmentStatus from './DrawerSections/AssignmentStatus/AssignmentStatus';
import TaskListMainContents from './TaskListMainContents/TaskListMainContents';


const drawerWidth = 240;

const TaskList = (props) => { //---------------------------------
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ pl: 2, pr: 1, textAlign: 'left', pt: 3, pb: 8 }}>
            <Box>
                <Typography sx={{ fontSize: 20, fontWeight: 600, }}>Tasks</Typography>
                <Divider sx={{ borderColor: "gray", mt: 1, mb: 3 }} />
                <TaskNavLinks />
                <Divider sx={{ borderColor: "gray", mt: 2, }} />
                <TaskStatus />
                <Divider sx={{ borderColor: "gray", mt: 1, }} />
                <AssignmentStatus />
            </Box>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', height: '100%', mx: 'auto', pr: { xs: 1, xl: 0 } }} maxWidth="xl">
            <AppBar
                position="fixed"
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    backgroundColor: "#2e2e38", color: "white",
                    top: 56, zIndex: 99,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Tasks Menu
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* ---------------Left Side Drawer--------------- */}
            <Box
                component="nav"
                sx={{
                    width: { sm: drawerWidth, lg: 280 }, flexShrink: { sm: 0 },
                }}
                aria-label="mailbox folders">

                {/* ----------Mobile Devices---------- */}
                <Drawer
                    PaperProps={{ sx: { backgroundColor: "#2e2e38", color: "white", top: 56, } }}
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        position: 'sticky',
                    }}>
                    {drawer}
                </Drawer>


                {/* ----------Large Devices-------- */}
                <Drawer
                    PaperProps={{
                        sx: {
                            backgroundColor: "#2e2e38", color: "white",
                            pt: { sm: 6, lg: 10 }, zIndex: 0,
                        }
                    }}
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { sm: drawerWidth, lg: 280 } },
                    }}
                    open>
                    {drawer}
                </Drawer>
            </Box>



            <Box
                component="main"
                sx={{
                    py: 3, mx: { xs: 1, sm: 3 },
                    width: {
                        sm: `calc(100% - ${drawerWidth}px)`,
                    }
                }}
            >
                <Toolbar sx={{ display: { xs: 'block', sm: 'none' } }} />
                <TaskListMainContents />

            </Box>
        </Box >
    );
}

TaskList.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
export default TaskList;