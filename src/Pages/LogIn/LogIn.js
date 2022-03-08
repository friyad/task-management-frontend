import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate, Navigate } from "react-router-dom";


const LogIn = () => {
    const token = localStorage.getItem('Authorization')
    let navigate = useNavigate();
    
    if (token) {
        navigate("/task-list")
    }


    const [values, setValues] = React.useState({
        amount: '',
        username: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // const [userToken, setUserToken] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsloading] = useState(false)

    const handleFormOnSubmit = (event) => {
        event.preventDefault();
        const data = { password: values.password, user: values.username }

        setIsloading(true)
        localStorage.setItem('Authorization', JSON.stringify('here is backend token $$222222'))

        // fetch('https://task-manager-api-f.herokuapp.com/api/user/login/', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         if (result.error) {
        //             setError(result.error)
        //             setIsloading(false)
        //         }
        //         else if (result.token) {
        //             localStorage.setItem('Authorization', JSON.stringify(result.token[0]))
        //             setError('')
        //             setIsloading(false)
        //         }
        //     })
    }


    return (
        <Box sx={{
            backgroundColor: '#656570', width: '100%', height: '100%', p: 0, m: 0, display: 'flex',
            justifyContent: 'center', alignItems: 'center'
        }}>

            <Box
                onSubmit={handleFormOnSubmit}
                component="form"
                sx={{ backgroundColor: '#2e2e38', width: { xs: 250, sm: 500 }, height: { xs: 430, sm: 500 }, mx: 'auto', display: 'flex', flexDirection: 'column', borderRadius: 2 }}>

                <Typography sx={{ color: 'white', fontSize: { xs: 21, sm: 40 }, py: 4 }}>
                    TASK MANAGEMENT
                </Typography>


                <Box sx={{ mx: { xs: 0, sm: 8 } }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: { xs: 'start', sm: 'space-between' },
                        alignItems: 'center'
                    }}>
                        <Typography sx={{ color: 'white', fontSize: 20, textAlign: 'left' }}>
                            Username
                        </Typography>
                        <TextField
                            onChange={handleChange('username')}
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: '5px',
                                width: { xs: 200, sm: 250 },
                            }}
                            required
                            placeholder="username"
                        />
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: { xs: 'start', sm: 'space-between' },
                        alignItems: 'center', mt: 2
                    }}>
                        <Typography sx={{ color: 'white', fontSize: 20, }}>
                            Password
                        </Typography>
                        <FormControl>
                            <OutlinedInput
                                sx={{
                                    backgroundColor: 'white',
                                    borderRadius: '5px',
                                    width: { xs: 200, sm: 250 },
                                }}
                                required
                                placeholder="password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Box>

                    <Typography sx={{
                        color: 'white', fontSize: 18, mt: 1, color: '#ff3838',
                        textTransform: 'capitalize'
                    }}>
                        {error}
                    </Typography>



                    <Box sx={{ mt: { xs: 4, sm: 8 } }}>
                        <LoadingButton
                            loading={isLoading}
                            variant="contained"
                            size="large"
                            color="warning"
                            type="submit"
                            sx={{ width: { xs: 200, sm: 300 }, py: 1, fontSize: 18 }}>
                            Sign In
                        </LoadingButton>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
};

export default LogIn;