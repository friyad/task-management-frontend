import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';

const MemberList = () => {
    const createData = (member, alias, role,) => {
        return { member, alias, role, };
    }
    const rows = [
        createData('Fake user 01', 'FU1', 'Reviewer',),
        createData('Fake user 02', 'FU2', 'Preparer',),
        createData('Fake user 03', 'FU3', 'Preparer',),
        createData('Fake user 04', 'FU4', 'Preparer',),
        createData('Fake user 05', 'FU5', 'Preparer',),
        createData('Fake user 06', 'FU6', 'Preparer',),
    ];


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ backgroundColor: '#eeeeee' }}>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 550, fontSize: 16 }}>Member</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 550, fontSize: 16 }}>Alias</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 550, fontSize: 16 }}>Role</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Box sx={{
                                    display: 'flex', justifyContent: 'start', alignItems: 'center'
                                }}>
                                    <Badge color="primary" sx={{
                                        '& .css-ejll1l-MuiBadge-badge': { backgroundColor: 'white', border: '2.5px solid #8a8886', height: 15, p: 0, minWidth: 15, top: 30, right: 4, }
                                    }} overlap="circular" badgeContent=" ">
                                        <Avatar sx={{ bgcolor: '#5c2e91' }} aria-label="recipe">
                                            R
                                        </Avatar>
                                    </Badge>
                                    <Typography sx={{ fontSize: 16, fontWeight: 700, ml: 3 }}>
                                        {row.member}
                                    </Typography>
                                </Box>
                            </TableCell>

                            <TableCell align="center">{row.alias}</TableCell>
                            <TableCell align="center">{row.role}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MemberList;