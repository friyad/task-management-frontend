import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import RemoveIcon from '@mui/icons-material/Remove';

import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const stepperStyle = {
    '& .css-8t49rw-MuiStepConnector-line': { display: 'none' },
    '& .css-14yr603-MuiStepContent-root': { borderLeft: 0 },
    '& .css-vnkopk-MuiStepLabel-iconContainer': { display: 'none' },
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: 260, sm: 500, md: 800, lg: 950 },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24, pt: { xs: 40, sm: 0 }
};

const BuiltInEvidenceDetails = ({ mainStepValue, stepValue, getDetailsOnClickStepValue }) => {
    const [evidenceDetailsData, setEvidenceDetailsData] = useState(null)

    useEffect(() => {
        fetch('./builtInEvidenceDetailsData.json')
            .then(res => res.json())
            .then(data => setEvidenceDetailsData(data))
    }, [])

    // For Accordion expand------------
    const handleChange = (panel) => (event, newExpanded) => {
        getDetailsOnClickStepValue(panel)
    };

    // For Delete Menu------
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    // for Modal-------------
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    const [progress, setProgress] = React.useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);



    const [year, setYear] = React.useState('');
    const hanldeSelectTaskGroup = (event) => {
        setYear(event.target.value);
    };

    return (
        <Box sx={{ maxWidth: '100%' }}>
            <Stepper activeStep={mainStepValue} orientation="vertical" sx={stepperStyle}>

                {!evidenceDetailsData
                    ? <Box sx={{ display: 'flex', mx: 'auto', mt: 3 }}>
                        <CircularProgress />
                    </Box>
                    : evidenceDetailsData.map(detailsData =>
                        <Step key={detailsData.id}>
                            <StepLabel>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography sx={{ color: '#2e2e38', fontSize: 22, fontWeight: 550 }}>
                                        {detailsData.title}
                                    </Typography>
                                    <IconButton aria-label="add an alarm" onClick={handleOpen}>
                                        <AddCircleIcon sx={{ fontSize: 28, color: '#2e2e38' }} />
                                    </IconButton>
                                </Box>
                            </StepLabel>
                            <StepContent>




                                {detailsData.layers.map(layer =>
                                    <Accordion
                                        key={layer}
                                        expanded={stepValue === detailsData.layers.indexOf(layer)}
                                        onChange={handleChange(detailsData.layers.indexOf(layer))}
                                        sx={{
                                            backgroundColor: '#fafafc',
                                            '& .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root:hover:not(.Mui-disabled)': { cursor: 'text' },
                                        }}>
                                        <AccordionSummary
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Box sx={{
                                                display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'
                                            }}>

                                                {stepValue !== detailsData.layers.indexOf(layer)
                                                    ? < AddIcon
                                                        sx={{ fontSize: 25, mr: 1.5, fontWeight: 550 }} />
                                                    : < RemoveIcon
                                                        sx={{ fontSize: 25, mr: 1.5, fontWeight: 550 }} />
                                                }

                                                <Typography
                                                    sx={{ fontSize: 17, fontWeight: 550 }}>
                                                    {layer}</Typography>

                                                <Box
                                                    sx={{
                                                        p: 0, m: 0, textAlign: 'right',
                                                        flexGrow: 1,
                                                    }}>
                                                    <MoreHorizIcon
                                                        sx={{ cursor: 'pointer' }}
                                                        id="basic-button"
                                                        aria-controls={open ? 'basic-menu' : undefined}
                                                        aria-haspopup="true"
                                                        aria-expanded={open ? 'true' : undefined}
                                                        onClick={handleClick} />

                                                    <Menu
                                                        id="basic-menu"
                                                        anchorEl={anchorEl}
                                                        open={open}
                                                        onClose={handleClose}
                                                        MenuListProps={{
                                                            'aria-labelledby': 'basic-button',
                                                        }}
                                                        sx={{
                                                            '& .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper': { boxShadow: '2px 3px 4px -1px #b4b4b4', }
                                                        }}
                                                    >
                                                        <MenuItem onClick={handleClose}>Delete</MenuItem>
                                                    </Menu>
                                                </Box>
                                            </Box>
                                        </AccordionSummary>



                                        <AccordionDetails
                                            sx={{
                                                p: 1, pb: 4, pt: 15
                                            }}>
                                            <Box sx={{ position: 'relative' }}>

                                                <TextField
                                                    sx={{
                                                        border: '2px solid #c4c4cd', borderRadius: 1,
                                                        px: 1,
                                                        '& .css-68u1dt-MuiInputBase-root-MuiInput-root:after': { display: 'none' },
                                                        '& .css-68u1dt-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before': { display: 'none' },
                                                        '& .css-68u1dt-MuiInputBase-root-MuiInput-root:before': { display: 'none' },
                                                        backgroundColor: 'white'
                                                    }}
                                                    fullWidth
                                                    rows="13"
                                                    id="standard-multiline-static"
                                                    multiline
                                                    variant="standard"
                                                />

                                                <IconButton aria-label="add an alarm"
                                                    sx={{ fontWeight: 700, fontSize: 23, cursor: 'pointer', position: 'absolute', right: 0, top: 10 }}>
                                                    <EditIcon />
                                                </IconButton>


                                                <Box sx={{
                                                    backgroundColor: '#fafafc', position: 'absolute', bottom: 2, left: 2, p: 1, width: '100%', textAlign: 'left'
                                                }}>
                                                    <Typography sx={{
                                                        color: 'blue', cursor: 'pointer', display: 'inline-block'
                                                    }}>
                                                        Show more
                                                    </Typography>


                                                </Box>



                                            </Box>
                                        </AccordionDetails>
                                    </Accordion>
                                )}




                            </StepContent>
                        </Step>
                    )}






                {/* ---------------Modal Start here--------------- */}
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={modalOpen}
                    onClose={handleModalClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                    sx={{ overflow: 'auto', }}
                >
                    <Fade in={modalOpen}>
                        <Box sx={style}>
                            <Typography id="transition-modal-title" variant="h5" component="h2"
                                sx={{ textAlign: 'left', backgroundColor: '#2e2e38', color: 'white', px: 2, py: 1 }}>
                                Add New Task
                            </Typography>

                            <Box sx={{ p: 2 }}>
                                <Typography id="transition-modal-description"
                                    sx={{ mb: { xs: 0.5, sm: 2 } }}>
                                    Enter Task Details
                                </Typography>

                                <LinearProgress variant="determinate" value={progress} />

                                <Typography id="transition-modal-description"
                                    sx={{ mt: { xs: 0.5, sm: 2 } }}>
                                    Enter Task Details in order procced.
                                </Typography>
                            </Box>


                            <Box sx={{ p: 2 }}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            sx={{
                                                '& .css-au3a9q-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': { color: '#2e2e38', },
                                                '& .css-10i04qz-MuiInputBase-root-MuiFilledInput-root:after': { borderBottom: '2px solid #2e2e38' }, mb: { xs: 0.5, sm: 2 }
                                            }}
                                            fullWidth
                                            id="standard-helperText"
                                            label="Prefix (Optional)"
                                            variant="filled"
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={12} >
                                        <TextField
                                            sx={{
                                                '& .css-au3a9q-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': { color: '#2e2e38', },
                                                '& .css-10i04qz-MuiInputBase-root-MuiFilledInput-root:after': { borderBottom: '2px solid #2e2e38' }, mb: { xs: 0.5, sm: 2 }
                                            }}
                                            fullWidth
                                            id="standard-helperText"
                                            label="Prefix (Optional)"
                                            variant="filled"
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={12} md={6}>
                                        <FormControl
                                            fullWidth
                                            formcontrol="true"
                                            variant="filled"
                                            sx={{
                                                '& .css-cio0x1-MuiInputBase-root-MuiFilledInput-root:after': { borderBottom: '2px solid white' },
                                                '& .css-11j0ok3-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': { color: '#2e2e38' }
                                            }}>

                                            <InputLabel sx={{
                                                color: '#2e2e38',

                                            }} id="demo-simple-select-filled-label">Task Group</InputLabel>
                                            <Select
                                                style={{ color: '#2e2e38' }}
                                                MenuProps={{
                                                    style: { zIndex: 999999 },
                                                }}
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                value={year}
                                                onChange={hanldeSelectTaskGroup}
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
                                    </Grid>
                                </Grid>
                            </Box>


                            <Box sx={{ p: { xs: 0.5, sm: 2 }, mt: { xs: 0.5, sm: 3 } }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography sx={{ fontWeight: 700, }}>
                                        Customize Description
                                    </Typography>
                                    <Typography sx={{}}>
                                        0 of 4000 Characters
                                    </Typography>
                                </Box>

                                <Box sx={{ border: '6px solid #f2f2f2', borderRadius: 1 }}
                                >
                                    <Box sx={{ display: 'flex', backgroundColor: '#f2f2f2', p: 1 }}>
                                        <FormatBoldIcon sx={{
                                            mx: { xs: 0, sm: 0.8 },
                                            cursor: 'pointer'
                                        }} />
                                        <FormatItalicIcon sx={{
                                            mx: { xs: 0, sm: 0.8 },
                                            cursor: 'pointer'
                                        }} />
                                        <FormatUnderlinedIcon sx={{
                                            mx: { xs: 0, sm: 0.8 },
                                            cursor: 'pointer'
                                        }} />
                                    </Box>

                                    <TextField
                                        className="descriptionTextAria"
                                        sx={{
                                            border: '2px solid #c4c4cd', borderRadius: 1,
                                            px: 1,
                                            '& .css-68u1dt-MuiInputBase-root-MuiInput-root:after': { display: 'none' },
                                            '& .css-68u1dt-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before': { display: 'none' },
                                            '& .css-68u1dt-MuiInputBase-root-MuiInput-root:before': { display: 'none' },
                                            backgroundColor: 'white'
                                        }}
                                        fullWidth
                                        rows="8"
                                        id="standard-multiline-static"
                                        multiline
                                        variant="standard"
                                    />

                                </Box>



                                <Box sx={{ textAlign: 'left', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 4 }}>
                                    <Button variant="outlined"
                                        onClick={handleModalClose}
                                        style={{ color: '#2e2e38', borderColor: '#2e2e38', borderRadius: 0 }}
                                        sx={{ textTransform: 'Capitalize', px: 3, py: 1.5, fontSize: 16, fontWeight: 700, width: { xs: '100%', md: 'auto' }, mb: { xs: 1, md: 0 }, mr: { md: 3 } }}>
                                        Back
                                    </Button>

                                    <Button variant="outlined"
                                        style={{ color: '#2e2e38', borderColor: '#2e2e38', borderRadius: 0 }}
                                        sx={{ textTransform: 'Capitalize', px: 3, py: 1.5, fontSize: 16, fontWeight: 700, width: { xs: '100%', md: 'auto' } }}>
                                        Save and Close
                                    </Button>
                                </Box>





                            </Box>

                        </Box>
                    </Fade>
                </Modal>







            </Stepper>
        </Box >
    );
};

export default BuiltInEvidenceDetails;