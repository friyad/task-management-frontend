import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

import jpgIcon from '../../../../../../Images/icons/jpg.png';
import xlsIcon from '../../../../../../Images/icons/xls.png';
import pdfIcon from '../../../../../../Images/icons/pdf.png';
import docIcon from '../../../../../../Images/icons/doc.png';
import pngIcon from '../../../../../../Images/icons/png.png';
const signOffsSelectStyle = {
    '& .css-1aa5qj0-MuiInputBase-root-MuiInput-root': { fontSize: 13, width: 45, },
    '& .css-1g12qau-MuiSvgIcon-root-MuiNativeSelect-icon': {
        right: 0,
    },
    '& .MuiNativeSelect-select': { p: 0 },
    '& .css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input.css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input.css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input': { p: 0 }
}

const EvidenceTable = () => {
    const createData = (name, calories, fat, carbs, protein) => {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData("bookmarks_10_1_21.pdf", ' ', 6.0, 21,),
        createData("bookmarks_11_5_21.pdf", ' ', 6.0, 14,),
        createData("Hsc syllabus.pdf", ' ', 6.0, 25,),
        createData("bookmarks_11_28_21.xlsx", ' ', 6.0, 1,),
        createData("Buyer List.pdf", ' ', 6.0, 5,),
        createData("Buyer Massage.docx", ' ', 6.0, 29,),
        createData("Buyer Request Letter 22222.docx", ' ', 6.0, 30,),
        createData("Buyer address 22222.pdf", ' ', 6.0, 80,),
        createData("Capture.PNG", ' ', 6.0, 40,),
        createData("New Microsoft Office Word Document.docx", ' ', 6.0, 23,),
        createData("১২নং বরকরই ইউনিয়ন.xlsx", ' ', 6.0, 28,),
        createData("56654.pdf", ' ', 6.0, 10,),
        createData("At 26-07-2021 New Bookmark.jpg", ' ', 6.0, 28,),
        createData("bookmarks_5_3_21.png", ' ', 6.0, 30,),
        createData("bookmarks_6_21_21.pdf", ' ', 6.0, 80,),
    ];


    return (
        <Box sx={{ width: { xs: 280, sm: 480, md: 'auto', xl: 'auto' }, overflow: 'auto', mx: 'auto', }}>
            <TableContainer component={Paper} sx={{ backgroundColor: '#f7f7f7' }}>
                <Table sx={{ minWidth: '100%' }} aria-label="simple table" >
                    <TableHead sx={{ backgroundColor: '#eeeeee' }}>
                        <TableRow>
                            <TableCell>
                                <Button variant="text" sx={{
                                    color: '#2e2e38', fontWeight: 550, fontSize: 16,
                                    textTransform: 'Capitalize',
                                }}>
                                    Name
                                    <ArrowUpwardIcon sx={{ ml: .6, fontSize: 19 }} />
                                </Button>
                            </TableCell>
                            <TableCell align="right" sx={{ fontWeight: 550, fontSize: 16 }}>Notes</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 550, fontSize: 16 }}>Sign-offs</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 550, fontSize: 16, }}>Attributes</TableCell>
                        </TableRow>
                    </TableHead>



                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                            <img src={
                                                row.name.split(".")[1].toLowerCase() === "jpg"
                                                    ? jpgIcon
                                                    : row.name.split(".")[1].toLowerCase() === "xlsx"
                                                        ? xlsIcon
                                                        : row.name.split(".")[1].toLowerCase() === "pdf"
                                                            ? pdfIcon
                                                            : row.name.split(".")[1].toLowerCase() === "docx"
                                                                ? docIcon
                                                                : row.name.split(".")[1].toLowerCase() === "png"
                                                                && pngIcon

                                            } alt="" style={{ width: '23px' }} />

                                            <Typography sx={{ ml: 1 }}>
                                                {row.name}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <MoreHorizIcon sx={{ cursor: 'pointer', }} />
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell align="right">
                                    <AddCircleOutlineIcon sx={{ fontSize: 30, cursor: 'pointer', }} />
                                </TableCell>
                                <TableCell align="center"
                                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

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
                                                <option value={10}>HUY</option>
                                                <option value={20}>ML</option>
                                                <option value={30}>MN</option>
                                            </NativeSelect>
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <Box sx={{ backgroundColor: '#eb4f00', p: 0.5, display: 'flex', justifyContent: 'center', alignItems: 'center', width: 25, height: 20, color: 'white', fontWeight: 600, mr: 0.5 }}>
                                            R
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
                                                <option value={10}>LHN</option>
                                                <option value={20}>NHP</option>
                                            </NativeSelect>
                                        </FormControl>
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box sx={{
                                        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
                                    }}>
                                        <AssignmentTurnedInIcon />
                                        {row.carbs}
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        </Box >
    );
};

export default EvidenceTable;