import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EvidenceTable from './EvidenceTable/EvidenceTable';


const TaskDetailsEvidence = () => {


    // Avidence Tab --------------
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ mt: 5 }}>
            <Tabs
                TabIndicatorProps={{ style: { background: '#2e2e38', } }}
                sx={{ mb: { xs: 3, sm: 0 } }}
                value={value} onChange={handleChange}
                aria-label="disabled tabs example">
                <Tab label="Evidence"
                    sx={{ textTransform: 'capitalize', pr: 4 }}
                    style={{ color: '#2e2e38', fontWeight: 700, fontSize: 17, }} />

                <Badge badgeContent={4}
                    sx={{
                        '& .MuiBadge-badge': {
                            backgroundColor: '#2e2e38', color: 'white',
                            fontSize: 18, width: 23, height: 23, zIndex: 1,
                            top: 23, right: 15
                        }
                    }}>
                </Badge>
            </Tabs>



            <Box sx={{ border: '1px solid gray', }}>
                <Box sx={{ textAlign: 'left', py: 0.5 }}>
                    <Button variant="text" sx={{
                        color: '#2e2e38', fontWeight: 550, fontSize: 16, textTransform: 'Capitalize',
                        mr: 1
                    }}>
                        <AddCircleIcon sx={{ color: '#2e2e38', mr: 0.5 }} />
                        Add Evidence
                    </Button>

                    <Button variant="text" sx={{
                        color: '#2e2e38', fontWeight: 550, fontSize: 16, textTransform: 'Capitalize',
                        mr: 1, mt: { xs: 2, sm: 0 }
                    }}>
                        <AddCircleIcon sx={{ color: '#2e2e38', mr: 0.5 }} />
                        Create Built-in document
                    </Button>
                </Box>

                <EvidenceTable />



            </Box>



        </Box>
    );
};

export default TaskDetailsEvidence;