import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Form = () => {
    return (
        <Box>

            <TextField
                sx={{
                    '& .css-au3a9q-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': { color: '#2e2e38', },
                    '& .css-10i04qz-MuiInputBase-root-MuiFilledInput-root:after': { borderBottom: '2px solid #2e2e38' },
                }}
                fullWidth
                id="standard-helperText"
                label="Name or email"
                helperText="Enter name or email and press enter to see results."
                variant="filled"
            />

            <TextField
                sx={{
                    '& .css-au3a9q-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': { color: '#2e2e38', },
                    '& .css-10i04qz-MuiInputBase-root-MuiFilledInput-root:after, .css-10i04qz-MuiInputBase-root-MuiFilledInput-root:before': { borderBottom: '0px' }, mt: 3
                }}
                fullWidth
                id="filled-basic"
                label="First Name"
                variant="filled"
            />

            <Box sx={{
                mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center',
                flexDirection: { xs: 'column', md: 'row' }
            }}>
                <TextField
                    sx={{
                        '& .css-au3a9q-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': { color: '#2e2e38', },
                        '& .css-10i04qz-MuiInputBase-root-MuiFilledInput-root:after, .css-10i04qz-MuiInputBase-root-MuiFilledInput-root:before': { borderBottom: '0px' }, mr: { xs: 0, md: 5 }
                    }}
                    fullWidth
                    id="filled-basic"
                    label="Initials"
                    variant="filled"
                />
                <TextField
                    sx={{
                        '& .css-au3a9q-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': { color: '#2e2e38', },
                        '& .css-10i04qz-MuiInputBase-root-MuiFilledInput-root:after, .css-10i04qz-MuiInputBase-root-MuiFilledInput-root:before': { borderBottom: '0px' }, mt: { xs: 3, md: 0 }
                    }}
                    fullWidth
                    id="filled-basic"
                    label="Engagements role"
                    variant="filled"
                />
            </Box>

            <Divider sx={{ borderColor: '#2e2e38', mt: 6, mb: 3 }} />


            <Box sx={{ textAlign: 'left', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                <Button variant="outlined"
                    style={{ color: '#2e2e38', borderColor: '#2e2e38', borderRadius: 0 }}
                    sx={{ textTransform: 'Capitalize', px: 6, py: 1.5, fontSize: 16, fontWeight: 700, mr: 2, width: { xs: '100%', md: 'auto' } }}>
                    <ArrowBackIosNewIcon />
                    Back
                </Button>

                <Button variant="contained"
                    style={{ color: 'white', backgroundColor: '#2e2e38', borderRadius: 0 }}
                    sx={{ textTransform: 'Capitalize', px: 6, py: 1.5, fontSize: 16, fontWeight: 700, width: { xs: '100%', md: 'auto' }, mt: { xs: 1, md: 0 } }}>
                    Finish
                    <ArrowForwardIosIcon />
                </Button>
            </Box>


        </Box>
    );
};

export default Form;