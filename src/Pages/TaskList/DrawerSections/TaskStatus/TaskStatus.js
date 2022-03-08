import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';




const TaskStatus = () => {
    const [checked, setChecked] = React.useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    let taskStatusData = [
        { name: "Open", badge: 2 },
        { name: "In progress", badge: 10 },
        { name: "In review", badge: 0 },
        { name: "Complete", badge: 15 },
    ]
    return (
        <Box>
            <Typography sx={{ fontSize: 17, fontWeight: 600, mt: 2, ml: 2 }}>Task Status</Typography>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'none' }}>
                {taskStatusData.map((taskData) => {
                    const labelId = `checkbox-list-label-${taskData.name}`;
                    return (
                        <ListItem
                            key={taskData.name}
                            secondaryAction={
                                <IconButton edge="end" aria-label="comments" sx={{ mr: 0 }}>
                                    <Badge badgeContent={taskData.badge} sx={{ '& .MuiBadge-badge': { backgroundColor: 'white', color: 'black' } }}>
                                    </Badge>
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(taskData.name)}
                                sx={{ m: 0, p: 0, pl: 3 }}>
                                <ListItemIcon>
                                    <Checkbox
                                        sx={{ color: 'white' }}
                                        id="taskStatusCheckbox"
                                        edge="start"
                                        checked={checked.indexOf(taskData.name) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={taskData.name} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>

        </Box>
    );
};

export default TaskStatus;