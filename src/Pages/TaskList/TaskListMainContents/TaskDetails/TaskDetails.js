import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Checkbox from '@mui/material/Checkbox';
import PersonIcon from '@mui/icons-material/Person';
import Divider from '@mui/material/Divider';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import TaskDetailsEvidence from './TaskDetailsEvidence/TaskDetailsEvidence';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const TaskDetails = ({ taskDetails }) => {
    const { _id, type, discription, date, customizeDiscription } = taskDetails;
    const [showExtraDescription, setShowExtraDescription] = useState(false)
    const [discriptionEdit, setDiscriptionEdit] = useState(false)
    const [discriptionUpdate, setDiscriptionUpdate] = useState(false)


    // To get top-right checkbox value--------
    const handleCheckbox = e => {
        // console.log(e.target.checked)
    }

    // When click on upadate button--------
    const hanldeCustomizeDiscriptionUpdate = (e) => {
        const updateDiscriptionValue = document.getElementById('standard-multiline-static').value
        // console.log(updateDiscriptionValue)//------------------
        setDiscriptionUpdate(false)
    }

    return (
        <Box sx={{ mt: { xs: 3, sm: 0 } }}>
            <Box sx={{ textAlign: 'right', mb: 1 }}>
                <Checkbox onClick={handleCheckbox}
                    sx={{
                        '& .MuiSvgIcon-root': { fontSize: 45, color: '#2db757', },
                    }}
                />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', }}>
                    <CircleOutlinedIcon sx={{ color: '#00753a', fontSize: 25, mr: 0.4 }} />
                    <Typography sx={{ fontWeight: 700, fontSize: 18 }}>{type} | </Typography>
                    <Typography sx={{ fontSize: 18, ml: 1, textAlign: 'left' }}>{discription.slice(0, 50)}</Typography>
                </Box>
                <MoreHorizIcon sx={{ cursor: 'pointer' }} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', mt: 4 }}>
                <PersonIcon sx={{ color: '#2e2e38' }} />
                <Typography sx={{ fontWeight: 700, fontSize: 15, color: '#2e2e38' }}>Closed</Typography>
            </Box>



            <Divider sx={{ my: 2.5 }} />
            <Box sx={{}}>
                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', }}>
                    <Typography sx={{ fontWeight: 700, fontSize: 17 }}>Description</Typography>

                    <EditIcon onClick={() => setDiscriptionUpdate(true)}
                        sx={{
                            fontWeight: 700, fontSize: 23, ml: 1, cursor: 'pointer',
                            display: `${discriptionUpdate ? "none" : "block"}`
                        }} />

                    <Box sx={{ display: `${discriptionUpdate ? "block" : "none"}`, }}>
                        <Button variant="contained" color="success"
                            onClick={hanldeCustomizeDiscriptionUpdate}
                            sx={{
                                px: 2, fontWeight: 700, ml: 1.5,
                                display: 'flex', justifyContent: 'start', alignItems: 'center',
                            }}>
                            <UpgradeIcon sx={{ mr: 0.5 }} /> Update
                        </Button>
                    </Box>
                </Box>



                <Box sx={{ my: 2, pl: 1.5, borderLeft: '3px solid #189d3e', textAlign: 'left', }}>
                    <Typography sx={{ fontWeight: 700, fontSize: 16, mb: 1 }}>Customized:</Typography>

                    <Typography sx={{ fontSize: 15, display: `${discriptionUpdate ? "none" : "block"}` }} >
                        {!showExtraDescription
                            ? (customizeDiscription.slice(0, 474) + ' ...')
                            : customizeDiscription.slice(0, customizeDiscription.length)
                        }
                        <br /><br />
                        <Typography onClick={() => setShowExtraDescription(!showExtraDescription)}
                            sx={{
                                fontWeight: 700, fontSize: 15, color: 'blue', cursor: 'pointer', userSelect: 'none', mt: 0.7, display: 'inline-block'
                            }}>{!showExtraDescription ? "Show more" : "Show less"}
                        </Typography>
                    </Typography>


                    <TextField
                        sx={{ display: `${!discriptionUpdate ? "none" : "block"}`, color: 'black' }}
                        fullWidth
                        id="standard-multiline-static"
                        multiline
                        value={customizeDiscription}
                        variant="standard"
                    />
                </Box>
            </Box>



            <Box>
                <TaskDetailsEvidence />
            </Box>

        </Box >
    );
};

export default TaskDetails;