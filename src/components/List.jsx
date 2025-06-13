import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'You could document your thoughts with intention',
  'Return to them at a time that truly matters',
  'Feel reconnected to your values, your voice, and your journey',
];

export default function List() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={Box} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel className='lime'>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
