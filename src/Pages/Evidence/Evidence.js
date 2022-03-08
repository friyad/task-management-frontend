import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Badge from '@mui/material/Badge';
import FilterListIcon from '@mui/icons-material/FilterList';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import TablePagination from '@mui/material/TablePagination';
import EvidenceMainTable from './EvidenceMainTable/EvidenceMainTable';


const Evidence = () => {
    // For Table Pagination on the third header-------
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // For Evidence header tab-----
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Box sx={{ mt: { xs: 7, sm: 0 }, backgroundColor: '#2e2e38', }} >
                <Box position="static" sx={{ p: 0, mx: 'auto', px: 2 }} maxWidth="xl"
                >
                    <Toolbar sx={{ p: 0, m: 0, alignItems: 'center', display: 'flex', }}>
                        <Tabs
                            TabIndicatorProps={{ style: { background: '#ffe600', } }}
                            sx={{
                                mb: { xs: 3, sm: 0 }, flexGrow: 1,
                            }}
                            value={value} onChange={handleChange}
                            aria-label="disabled tabs example">
                            <Tab label="Evidence"
                                sx={{ textTransform: 'capitalize', pr: { xs: 4, sm: 6 } }}
                                style={{ color: 'white', fontWeight: 700, fontSize: 17, }} />

                            <Badge badgeContent={4}
                                sx={{
                                    '& .MuiBadge-badge': {
                                        backgroundColor: 'white', color: '#2e2e38',
                                        fontSize: 18, zIndex: 1,
                                        top: 23, right: 15
                                    }
                                }}>
                            </Badge>
                        </Tabs>

                        <Typography sx={{ fontWeight: 600, color: 'white', fontSize: { xs: 16, sm: 20 } }} >
                            Document List
                        </Typography>
                    </Toolbar>
                </Box>
            </Box>


            <Box sx={{
                mx: 'auto', mt: { xs: 1, sm: 2 }, px: { xs: 1.2, sm: 4 },
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                flexDirection: { xs: 'column', sm: 'row' }
            }} maxWidth="xl">

                <Box sx={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                    <Button variant="outlined"
                        sx={{ color: 'black', borderColor: 'black', py: 1, }} >
                        <FilterListIcon sx={{ fontSize: { xs: 20, sm: 30 } }} />
                    </Button>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: { xs: 2, sm: 0 }, width: '100%', ml: 3 }}>
                        <SearchIcon sx={{ color: '#2e2e38', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-serach" label="Search something" variant="standard"
                            sx={{
                                '& .Mui-focused': { color: '#2e2e38', },
                            }} />
                    </Box>
                </Box>

                <TablePagination
                    labelRowsPerPage="Show"
                    component="div"
                    count={300}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>

            <Box sx={{ mt: { xs: 2, sm: 3 } }}>

                <EvidenceMainTable />

            </Box>




        </Box>
    );
};

export default Evidence;