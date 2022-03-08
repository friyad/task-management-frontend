import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';


const Engagements = ({ engagement }) => {
    const { id, type, date } = engagement;

    return (
        <Box sx={{
            backgroundColor: '#f2f2f2', borderLeft: '4px solid #419bf4', borderRadius: 1,
            mt: 3, boxShadow: 3,
        }}>


            <Box sx={{
                display: 'flex', justifyContent: 'space-between', px: 3, pt: 2, pb: 4, boxShadow: 2,
            }}>
                <Box sx={{ textAlign: 'left' }}>
                    <Typography sx={{ fontWeight: 500 }}>
                        {type} [{date}]
                    </Typography>

                    <Typography sx={{ fontWeight: 800, my: 1, }}>
                        {date}
                    </Typography>
                </Box>
                <Box>
                    <Button sx={{ m: 0, p: 0, color: '#2e2e38' }}>
                        <MoreHorizIcon sx={{ fontSize: 30, }} />
                    </Button>
                </Box>
            </Box>



            <Box sx={{ p: 3, position: 'relative' }}>
                <Box className="triangle-up">
                    <StarPurple500Icon
                        sx={{ position: 'absolute', top: 20, right: 2, fontSize: 20, color: '#ffa900' }} />
                </Box>
            </Box>

        </Box>
    );
};

export default Engagements;