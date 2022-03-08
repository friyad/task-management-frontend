import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';


const Task = ({ taskData, getTaskId }) => {
    const { id, title, tasks } = taskData;
    const { date, discription, type, _id } = tasks;

    return (
        <Accordion sx={{ position: 'static' }} >
            <AccordionSummary
                sx={{ backgroundColor: '#f7f7f7', position: 'static' }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', p: 1 }}>
                    <Badge badgeContent={tasks.length} sx={{ '& .MuiBadge-badge': { backgroundColor: '#2e2e38', color: 'white', fontSize: 18, width: 23, height: 23, zIndex: 1 } }}>
                    </Badge>
                    <Typography sx={{ fontWeight: 600, ml: 2.8, textAlign: 'left' }}>{title}</Typography>
                </Box>
            </AccordionSummary>



            <AccordionDetails sx={{ position: 'static' }}>
                {tasks.map(singleTask =>
                    <Box div key={singleTask._id}>
                        <Grid container spacing={2} sx={{ p: 1, cursor: 'pointer' }}
                            onClick={() => getTaskId(id, singleTask._id)}>

                            <Grid item xs={2} sx={{ m: 0, p: 0, textAlign: 'left' }}>
                                <Box>
                                    <Typography>
                                        {singleTask.type}
                                    </Typography>
                                    <CircleOutlinedIcon sx={{ color: '#00753a' }} />
                                </Box>
                            </Grid>


                            <Grid item xs={7} sx={{ m: 0, p: 0, textAlign: 'left' }}>
                                <Typography>
                                    {singleTask.discription.slice(0, 50)}...
                                </Typography>
                            </Grid>

                            <Grid item xs={3} sx={{ m: 0, p: 0, textAlign: 'right' }}>
                                <Typography>
                                    {singleTask.date}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />
                    </Box>)

                }
            </AccordionDetails>
        </Accordion>
    );
};

export default Task;