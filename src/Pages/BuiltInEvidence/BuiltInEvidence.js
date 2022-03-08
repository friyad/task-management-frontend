import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SideNavigation from './SideNavigation/SideNavigation';
import BuiltInEvidenceDetails from './BuiltInEvidenceDetails/BuiltInEvidenceDetails';


const drawerWidth = 240;


const BuiltInEvidence = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [mainStepValue, setMainStepValue] = useState(0)
    const [stepValue, setStepValue] = useState(0)
    const [detailsOnClickStepValue, setDetailsOnClickStepValue] = useState(0)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const container = window !== undefined ? () => window().document.body : undefined;

    const getLayersStepValue = (mainStep, step) => {
        // console.log(mainStep)
        setMainStepValue(mainStep)
        setStepValue(step)
    }

    const getDetailsOnClickStepValue = step => {
        setDetailsOnClickStepValue(step)
    }


    return (
        <Box sx={{ display: 'flex', mx: 'auto' }} maxWidth="xl">
            <AppBar
                position="fixed"
                sx={{
                    top: 56,
                    display: { xs: 'block', sm: 'none' },
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }, backgroundColor: '#2e2e38'
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
                        Bult In Evidence
                    </Typography>
                </Toolbar>
            </AppBar>



            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth, lg: 330, xl: 360 }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* For Mobile Devices*/}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#2e2e38', color: 'white', top: 56, px: 1.3, pb: 15 },
                    }}
                >
                    <SideNavigation
                        detailsOnClickStepValue={detailsOnClickStepValue}
                        getLayersStepValue={getLayersStepValue} />
                </Drawer>
                {/* Fot Large Devices */}
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box', pl: { sm: 1.3, lg: 3, xl: 4 }, pr: { sm: 1, lg: 1.5, xl: 2 }, pb: 5,
                            width: { sm: drawerWidth, lg: 330, xl: 360 },
                            backgroundColor: '#2e2e38', color: 'white', pt: 10
                        },
                    }}
                    open
                >
                    <SideNavigation
                        setDetailsOnClickStepValue={setDetailsOnClickStepValue}
                        detailsOnClickStepValue={detailsOnClickStepValue}
                        getLayersStepValue={getLayersStepValue} />
                </Drawer>
            </Box>










            <Box
                component="main"
                sx={{
                    flexGrow: 1, p: 3, width: {
                        sm: `calc(100% - ${drawerWidth}px)`,
                        lg: `calc(100% - 330px)`,
                        xl: `calc(100% - 360px)`
                    }
                }}
            >
                <Toolbar sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Toolbar sx={{ display: { xs: 'block', sm: 'none' } }} />

                <BuiltInEvidenceDetails
                    getDetailsOnClickStepValue={getDetailsOnClickStepValue}
                    mainStepValue={mainStepValue}
                    stepValue={stepValue} />

            </Box>
        </Box>
    );
}

BuiltInEvidence.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default BuiltInEvidence;