import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';


const steperStyle = {
    mt: 1,
    '& .css-qivjh0-MuiStepLabel-label.Mui-active': { fontWeight: 700, color: '#ffe600' },
    '& .css-qivjh0-MuiStepLabel-label': { color: 'white', cursor: 'pointer' },
    '& .css-8t49rw-MuiStepConnector-line': { minHeight: 15, },
    '& .css-117w1su-MuiStepIcon-text': { fill: 'none' },
    '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active': { color: '#ffe600', backgroundColor: '#ffe600', borderRadius: '50%' },
    '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root': {
        contentVisibility: 'hidden', border: '1px solid white', borderRadius: '50%', width: 14, height: 14, ml: 0.5
    },
    '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed': {
        contentVisibility: 'hidden', border: '1px solid white', borderRadius: '50%'
    },
}
const mainStepperStyle = {
    '& .css-8t49rw-MuiStepConnector-line': { minHeight: 15, },
    '& .css-117w1su-MuiStepIcon-text': { fill: 'none' },
    '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active': { color: 'white', backgroundColor: 'white', },
    '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root': {
        contentVisibility: 'hidden', border: '1px solid white'
    },
    '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed': {
        contentVisibility: 'hidden', border: '1px solid white'
    },
    '& .css-qivjh0-MuiStepLabel-label, .css-qivjh0-MuiStepLabel-label.Mui-active, .css-qivjh0-MuiStepLabel-label.Mui-completed': { color: 'white', }

}
/* 
const layers = ['1.1 Automated techniques', '1.2 General questions', '1.3 Related party relationships or transactions', '1.4 Use of service organization', '1.5 Critical path of the SCOT', '1.5a Initiation phase', '1.5b Recording phase', '1.5c Processing phase', '1.5d Reporting phase', '1.6 Wrap up our understanding']

const builtInEvidenceDetailsData = [
    {
        id: 1,
        title: '1. Obtain and understanding of the SCOT',
        layers: ['1.1 Automated techniques', '1.2 General questions', '1.3 Related party relationships or transactions', '1.4 Use of service organization', '1.5 Critical path of the SCOT', '1.5a Initiation phase', '1.5b Recording phase', '1.5c Processing phase', '1.5d Reporting phase', '1.6 Wrap up our understanding'],
    },
    {
        id: 2,
        title: '2. Confirm our understanding of the SCOT',
        layers: ['2.1 Perform probing inquiries',],
    },
]
 */


const ShowLayers = ({
    getLayersStepValue,
    detailsOnClickStepValue,
    setDetailsOnClickStepValue }) => {
    const [evidenceDetailsData, setEvidenceDetailsData] = useState(null)
    const [activeStep, setActiveStep] = useState(0)
    const [mainActiveStep, setMainActiveStep] = useState(0);

    useEffect(() => {
        fetch('./builtInEvidenceDetailsData.json')
            .then(res => res.json())
            .then(data => setEvidenceDetailsData(data))
    }, [])

    const handleMainStepNext = (stepValue) => {
        // console.log(stepValue)
        setMainActiveStep(stepValue);
        setDetailsOnClickStepValue(0)
        setActiveStep(0)
    };

    const hanldeNext = (stepValue) => {
        setActiveStep(stepValue);
        setDetailsOnClickStepValue(stepValue)
    };

    useEffect(() => {
        getLayersStepValue(mainActiveStep, activeStep)
    }, [activeStep, mainActiveStep])



    return (
        <Box sx={{ width: '100%', mt: 2 }}>
            <Stepper activeStep={mainActiveStep} orientation="vertical" sx={mainStepperStyle}>


                {!evidenceDetailsData
                    ? <Box sx={{ display: 'flex', mx: 'auto', mt: 3 }}>
                        <CircularProgress />
                    </Box>
                    : evidenceDetailsData.map(detailsData =>
                        <Step key={detailsData.id} sx={{
                            '& .css-14sza3e-MuiStepLabel-root': { padding: 0 },
                        }}>
                            <StepLabel
                                onClick={() => handleMainStepNext(evidenceDetailsData.indexOf(detailsData))}
                                sx={{ cursor: 'pointer' }}>
                                {detailsData.title}
                            </StepLabel>

                            <StepContent sx={{ p: 0, ml: -0.1, border: 0 }}>
                                <Stepper activeStep={activeStep} orientation="vertical" sx={steperStyle}>
                                    {detailsData.layers &&
                                        detailsData.layers.map(layer =>
                                            <Step key={layer} sx={{
                                                '& .css-14sza3e-MuiStepLabel-root': { padding: 0, cursor: 'pointer' },
                                            }}>
                                                <StepLabel
                                                    onClick={() => hanldeNext(detailsData.layers.indexOf(layer))}>

                                                    {layer}
                                                </StepLabel>
                                            </Step>
                                        )}
                                </Stepper>
                            </StepContent>
                        </Step>)}


            </Stepper>
        </Box >
    );
};

export default ShowLayers;