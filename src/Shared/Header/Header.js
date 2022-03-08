import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { Link } from 'react-router-dom'
import AddBoxIcon from '@mui/icons-material/AddBox';
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const drawerWidth = 240;


const Header = () => {
    // const classes = useStyles();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [year, setYear] = React.useState('');

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleTaskManagements = (event) => {
        setYear(event.target.value);
    };

    // For Task Management year selection in top hearder-----------
    const headerInput = <>
        <FormControl
            formcontrol="true"
            variant="filled"
            sx={{
                m: 1, minWidth: { xs: 200, lg: 320 }, left: { xs: 0, md: 120, xl: 130 },
                backgroundColor: '#23232f', '& .MuiSelect-icon': { color: "white" },
                '& .css-cio0x1-MuiInputBase-root-MuiFilledInput-root:after': { borderBottom: '2px solid white' },
                '& .css-11j0ok3-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': { color: 'white' }
            }}>

            <InputLabel sx={{
                color: 'white',

            }} id="demo-simple-select-filled-label">!!!</InputLabel>
            <Select
                style={{ color: "white", }}
                MenuProps={{
                    style: { zIndex: 999999 },
                }}
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={year}
                onChange={handleTaskManagements}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={20}>Task Management 2020</MenuItem>
                <MenuItem value={21}>Task Management 2021</MenuItem>
                <MenuItem value={22}>Task Management 2022</MenuItem>
                <MenuItem value={23}>Task Management 2023</MenuItem>
                <MenuItem value={24}>Task Management 2024</MenuItem>
            </Select>
        </FormControl >
    </>

    // For Header, home, menu and document -----------
    const headerElements =
        <>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mr: 2 }}>
                <Link to="/task-list" >
                    <Box sx={{ display: 'flex', color: 'white', p: { xs: 1, md: 0 } }} >
                        <HomeIcon sx={{ fontSize: { xs: 25, md: 35 }, mx: 1, color: "white" }} />
                        <Typography sx={{ display: { xs: 'block', md: 'none' } }}>Home</Typography>
                    </Box>
                </Link>
                <Link to="/all-engagements" >
                    <Box sx={{ display: 'flex', color: 'white', p: { xs: 1, md: 0 } }} >
                        <FormatListBulletedIcon sx={{ fontSize: { xs: 25, md: 35 }, mx: 1, color: "white" }} />
                        <Typography sx={{ display: { xs: 'block', md: 'none' } }}>All Engagements</Typography>
                    </Box>
                </Link>
                <Link to="/evidence" >
                    <Box sx={{ display: 'flex', color: 'white', p: { xs: 1, md: 0 } }} >
                        <SummarizeIcon sx={{ fontSize: { xs: 25, md: 35 }, mx: 1, color: "white" }} />
                        <Typography sx={{ display: { xs: 'block', md: 'none' } }}>Evidence</Typography>
                    </Box>
                </Link>
                <Link to="/create-engagements" >
                    <Box sx={{ display: 'flex', color: 'white', p: { xs: 1, md: 0 } }} >
                        <AddBoxIcon sx={{ fontSize: { xs: 25, md: 35 }, mx: 1, color: "white" }} />
                        <Typography sx={{ display: { xs: 'block', md: 'none' } }}>Create Engagements</Typography>
                    </Box>
                </Link>
                <Link to="/built-in-evidence" >
                    <Box sx={{ display: 'flex', color: 'white', p: { xs: 1, md: 0 } }} >
                        <PlaylistAddCircleIcon sx={{ fontSize: { xs: 25, md: 35 }, mx: 1, color: "white" }} />
                        <Typography sx={{ display: { xs: 'block', md: 'none' } }}>Build In Evidence</Typography>
                    </Box>
                </Link>
            </Box>
        </>


    return (
        <AppBar sx={{ backgroundColor: '#2e2e38', zIndex: 9999, top: 0, position: { xs: 'fixed', sm: 'sticky' }, }}>

            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontWeight: 600 }}
                    >
                        Canvas
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Drawer
                            PaperProps={{ sx: { backgroundColor: "#2e2e38", color: "white", top: 0, } }}
                            variant="temporary"
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                zIndex: 99999,
                                display: { xs: 'block', md: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {headerInput}
                            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                                {headerElements}
                            </Box>
                        </Drawer>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        Canvas
                    </Typography>







                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, }}>
                        {headerInput}
                    </Box>



                    <Box sx={{
                        display: 'flex', flexGrow: 1, justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            {headerElements}
                        </Box>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: { xs: 6, md: 7 } }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;