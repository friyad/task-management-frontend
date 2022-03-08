import React from 'react';
import Box from '@mui/material/Box';
import { NavLink } from "react-router-dom";


const TaskNavLinks = () => {
    let activeStyle = {
        transition: 'all 0.3s',
        color: 'white',
        display: 'block',
        textDecoration: 'none',
        paddingLeft: '15px',
        margin: '8px 0px 8px 5px',
        borderLeft: '4px solid #ffa900',
    };
    const navlinkeStyles = {
        transition: 'all 0.3s',
        color: 'white',
        display: 'block',
        textDecoration: 'none',
        paddingLeft: '15px',
        margin: '8px 0px 8px 5px',
    }
    return (
        <Box>
            <NavLink to="/myTasks"
                style={({ isActive }) => isActive ? activeStyle : navlinkeStyles}>
                My tasks
            </NavLink>
            <NavLink to="/scope&Strategy"
                style={({ isActive }) => isActive ? activeStyle : navlinkeStyles}>
                Scope & strategy
            </NavLink>
            <NavLink to="/scots"
                style={({ isActive }) => isActive ? activeStyle : navlinkeStyles}>
                SCOTs
            </NavLink>
            <NavLink to="/itSOs"
                style={({ isActive }) => isActive ? activeStyle : navlinkeStyles}>
                IT/SOs
            </NavLink>
            <NavLink to="/accounts"
                style={({ isActive }) => isActive ? activeStyle : navlinkeStyles}>
                Accounts
            </NavLink>
            <NavLink to="/generalExecution"
                style={({ isActive }) => isActive ? activeStyle : navlinkeStyles}>
                General execution
            </NavLink>
            <NavLink to="/conclution"
                style={({ isActive }) => isActive ? activeStyle : navlinkeStyles}>
                Conclution
            </NavLink>
            <NavLink to="/teamSummary"
                style={({ isActive }) => isActive ? activeStyle : navlinkeStyles}>
                Team summary
            </NavLink>
        </Box>
    );
};

export default TaskNavLinks;