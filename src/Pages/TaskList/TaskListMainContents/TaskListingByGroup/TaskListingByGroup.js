import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Task from './Task/Task';
import TablePagination from '@mui/material/TablePagination';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';



const TaskListingByGroup = ({ getTaskId }) => {
    const [taskListData, setTaskListData] = useState(null)

    useEffect(() => {
        fetch('./taskListData.json')
            .then(res => res.json())
            .then(data => setTaskListData(data))
    }, [])

    // For Changing Tabs----------------------
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    // For Pagination-------------------------
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    return (
        <Box sx={{ height: { xs: 'auto', lg: 905 }, overflow: { xs: '', sm: 'auto' }, }} >
            {/* -------------Top filter button and search button------------- */}
            <Box sx={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                pl: 2, pt: 1,
            }}>
                <Button variant="outlined"
                    sx={{ color: 'black', borderColor: 'black', py: 1, }} >
                    <FilterListIcon sx={{ fontSize: 30 }} />
                </Button>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: { xs: 2, sm: 0 }, width: '100%', ml: 3 }}>
                    <SearchIcon sx={{ color: '#2e2e38', mr: 1, my: 0.5 }} />
                    <TextField fullWidth={true} id="input-with-serach" label="Search something" variant="standard"
                        sx={{
                            '& .Mui-focused': { color: '#2e2e38', },
                        }} />
                </Box>
            </Box>

            {/* --------------Show all, To prepare, To review tabs-------------- */}
            <Box sx={{ width: '100%', bgcolor: 'background.paper', mt: 2, }}>
                <Tabs value={value} onChange={handleChange}
                    TabIndicatorProps={{ style: { background: '#2e2e38', } }}
                >
                    <Tab label="Show All" sx={{ textTransform: 'capitalize', px: { xs: 0.5, md: 2 }, ml: { xs: 2, sm: 0 } }}
                        style={{ color: '#2e2e38', fontWeight: 600, fontSize: 16, }} />
                    <Tab label="To Prepare" sx={{ textTransform: 'capitalize', px: { xs: 0.5, md: 2 } }}
                        style={{ color: '#2e2e38', fontWeight: 600, fontSize: 16, }} />
                    <Tab label="To Review" sx={{ textTransform: 'capitalize', px: { xs: 0.5, md: 2 } }}
                        style={{ color: '#2e2e38', fontWeight: 600, fontSize: 16, }} />
                </Tabs>
            </Box>




            <Box sx={{ backgroundColor: '#eeeeee', }}>
                {/* -------------Task Header with type, name, due date------------- */}
                <Box sx={{ mt: 1, pl: { xs: 2, sm: 0 } }}>
                    <Box sx={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    }}>
                        <Box>
                            <Button sx={{ p: 1, m: 0, borderColor: 'black', color: 'black', textTransform: 'Capitalize' }}>
                                <Typography sx={{ fontSize: 16, display: 'flex', alignItems: 'center' }}>
                                    Type
                                    <ArrowUpwardIcon sx={{ ml: .6, fontSize: 19 }} />
                                </Typography>
                            </Button>
                            <Button sx={{ p: 1, m: 0, borderColor: 'black', color: 'black', textTransform: 'Capitalize', ml: 1 }}>
                                <Typography sx={{ fontSize: 16, display: 'flex', alignItems: 'center' }}>
                                    Name
                                    <ArrowUpwardIcon sx={{ ml: .6, fontSize: 19 }} />
                                </Typography>
                            </Button>
                        </Box>
                        <Button sx={{ p: 1, m: 0, borderColor: 'black', color: 'black', textTransform: 'Capitalize' }}>
                            <Typography sx={{ fontSize: 16, display: 'flex', alignItems: 'center' }}>
                                Due Date
                                <ArrowUpwardIcon sx={{ ml: .6, fontSize: 19 }} />
                            </Typography>
                        </Button>
                    </Box>
                </Box>

                {/* ----------Task with accordion---------- */}
                <Box sx={{ pl: { xs: 2, sm: 0 }, position: 'static', textAlign: 'center' }}>
                    {!taskListData
                        ? <Box sx={{ display: 'flex', mx: 'auto', py: 18 }}>
                            <CircularProgress sx={{ mx: 'auto' }} />
                        </Box>
                        : taskListData.map(taskData => <Task
                            key={taskData.id}
                            taskData={taskData}
                            getTaskId={getTaskId}
                        />)
                    }
                </Box>




                {/* ---------------Bottom Pagination section--------------- */}
                <Box sx={{ boxShadow: { xs: 3, lg: 1 }, position: { xs: "static", lg: 'absolute' }, bottom: 0, width: '100%', zIndex: 2, mt: { xs: 2, lg: 0 }, }}>
                    <TablePagination
                        sx={{ backgroundColor: 'white' }}
                        component="div"
                        count={200}
                        page={page}
                        labelRowsPerPage="Show"
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Box>




            </Box>
        </Box>
    );
};


export default TaskListingByGroup;