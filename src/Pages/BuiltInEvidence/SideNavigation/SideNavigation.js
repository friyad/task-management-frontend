import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import NativeSelect from '@mui/material/NativeSelect';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import TimelineIcon from '@mui/icons-material/Timeline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LayersIcon from '@mui/icons-material/Layers';
import ShowLayers from './ShowLayers/ShowLayers';


const signOffsSelectStyle = {

    '& .css-1aa5qj0-MuiInputBase-root-MuiInput-root': { fontSize: 13, width: 45, color: 'white' },
    '& .css-1g12qau-MuiSvgIcon-root-MuiNativeSelect-icon': {
        right: 0, color: 'white'
    },
    '& .MuiNativeSelect-select': { p: 0 },
    '& .css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input.css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input.css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input': { p: 0 }
}

const SideNavigation = ({
    getLayersStepValue,
    detailsOnClickStepValue,
    setDetailsOnClickStepValue }) => {

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <div>
            <Divider sx={{ borderColor: 'white', mt: { xs: 1.3, } }} />
            <List>
                <FormControl sx={{
                    width: '100%', mt: 1.2,
                    '& .css-194jhg8-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
                        color: 'white'
                    },
                    '& .css-1480iag-MuiInputBase-root-MuiInput-root:after, .css-1480iag-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before, .css-1480iag-MuiInputBase-root-MuiInput-root:before': { borderBottom: '1px solid white' },
                }}

                    variant="standard">
                    <InputLabel sx={{
                        color: 'white',
                    }} htmlFor="built-in-avidence-search-field">Search</InputLabel>
                    <Input
                        style={{ color: 'white', }}
                        id="built-in-avidence-search-field"
                        type="text"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton sx={{ color: 'white' }}>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>


                <Box
                    sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2,
                        flexDirection: { xs: 'column', lg: 'row' }
                    }}>
                    <Box
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <Box sx={{ backgroundColor: '#189d3e', p: 0.5, display: 'flex', justifyContent: 'center', alignItems: 'center', width: 25, height: 20, color: 'white', fontWeight: 600, mr: 0.5 }}>
                                P
                            </Box>
                            <FormControl fullWidth
                                sx={signOffsSelectStyle}>
                                <NativeSelect
                                    disableUnderline
                                    defaultValue={10}
                                    inputProps={{
                                        name: 'sign-offs',
                                        id: 'uncontrolled-native',
                                    }}>
                                    <option style={{ color: 'black' }} value={10}>HUY</option>
                                    <option style={{ color: 'black' }} value={20}>ML</option>
                                    <option style={{ color: 'black' }} value={30}>MN</option>
                                </NativeSelect>
                            </FormControl>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <Box sx={{ backgroundColor: '#eb4f00', p: 0.5, display: 'flex', justifyContent: 'center', alignItems: 'center', width: 25, height: 20, color: 'white', fontWeight: 600, mr: 0.5 }}>
                                R
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'end', alignItems: 'center', width: { xs: '100%', xl: 'auto' }, mt: { xs: 1, xl: 0 } }}>
                        <Box
                            sx={{ flexGrow: 1, display: 'flex', justifyContent: { xs: 'space-between', xl: 'end' }, alignItems: 'center', }}>
                            <Typography sx={{
                                display: 'flex', justifyContent: 'end', alignItems: 'center', fontSize: 17, mr: 2
                            }}>
                                <NoteAltIcon sx={{ mr: 0.5 }} /> 130
                            </Typography>

                            <Typography sx={{
                                display: 'flex', justifyContent: 'end', alignItems: 'center', fontSize: 17, mr: 3.7
                            }}>
                                <TimelineIcon sx={{ mr: 0.5 }} /> 0
                            </Typography>

                            <MoreHorizIcon sx={{ fontSize: 30, cursor: 'pointer' }} />
                        </Box>
                    </Box>
                </Box>
                <Divider sx={{ borderColor: 'white', mt: { xs: 1.3, md: 2, } }} />



                <FormControl sx={{
                    width: '100%', mt: 1.2,
                    '& .css-194jhg8-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
                        color: 'white'
                    },
                    '& .css-1480iag-MuiInputBase-root-MuiInput-root:after, .css-1480iag-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before, .css-1480iag-MuiInputBase-root-MuiInput-root:before': { borderBottom: '1px solid white' },
                }}

                    variant="standard">
                    <InputLabel sx={{
                        color: 'white',
                    }} htmlFor="built-in-avidence-search-field">Search</InputLabel>
                    <Input
                        style={{ color: 'white', }}
                        id="built-in-avidence-search-field"
                        type="text"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton sx={{ color: 'white' }}>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </List>

            <List>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{
                    background: 'none', boxShadow: 0, color: 'white', pr: 4,
                    '& .MuiButtonBase-root, .MuiAccordionSummary-root, .MuiAccordionSummary-gutters': { borderBottom: '2px solid white', padding: 0 },
                    "& .MuiSvgIcon-root,": { color: 'white', },
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <LayersIcon sx={{ position: 'absolute', right: -30 }} />
                        <Typography>Show: All</Typography>
                    </AccordionSummary>


                    <AccordionDetails>
                        <ShowLayers
                            setDetailsOnClickStepValue={setDetailsOnClickStepValue}
                            detailsOnClickStepValue={detailsOnClickStepValue}
                            getLayersStepValue={getLayersStepValue} />
                    </AccordionDetails>
                </Accordion>
            </List>
        </div>
    );
};

export default SideNavigation;