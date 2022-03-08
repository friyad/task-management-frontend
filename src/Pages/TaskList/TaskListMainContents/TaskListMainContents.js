import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TaskListingByGroup from './TaskListingByGroup/TaskListingByGroup';
import { useState } from 'react';
import TaskDetails from './TaskDetails/TaskDetails';
import CircularProgress from '@mui/material/CircularProgress';



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




const TaskListMainContents = () => {
    const [taskListData, setTaskListData] = useState(null)
    const [taskDetails, setTaskDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    // Get Task _id form the Task.js file and find same task in DB--------------
    const getTaskId = (taskPriId, _id) => {
        setIsLoading(true)
        fetch('./taskListData.json')
            .then(res => res.json())
            .then(data => {
                setTaskListData(data)
                setIsLoading(false)
            })
        if (taskListData) {
            const findTaskPrifix = taskListData.find(task => task.id === taskPriId)
            const findSingleTask = findTaskPrifix.tasks.find(singleTask => singleTask._id === _id)
            setTaskDetails(findSingleTask)
        }
    }

    return (
        <Box sx={{ m: 0, p: 0, mt: { xs: 7, sm: 0 }, height: '100%', }}>
            <Grid container spacing={2} sx={{ height: '100%' }}>

                <Grid item xs={12} lg={5} sx={{
                    borderRight: { xs: "", lg: '1px solid gray' },
                    '&.MuiGrid-root': { p: 0, }, position: 'relative',
                    height: { xs: 'auto', lg: 950 },
                }}>
                    <TaskListingByGroup getTaskId={getTaskId} />
                </Grid>




                <Grid item xs={12} lg={7} sx={{
                    m: 0, p: 0, pb: { xs: 10, lg: 0 },
                    height: { xs: 'auto', lg: 950 }, overflow: 'auto'
                }}>
                    {isLoading
                        ? <CircularProgress disableShrink sx={{ mt: 10 }} />
                        : taskDetails &&
                        <TaskDetails taskDetails={taskDetails} />
                    }
                </Grid>

            </Grid>
        </Box>
    );
};

export default TaskListMainContents;