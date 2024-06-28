import React from 'react';
import { Box, Typography } from '@mui/material';
import { MotionDiv } from '../../utils/motion'; 

const FooterComponent = () => {
  return (
    <MotionDiv initial={{ opacity: 0, y: 50 }}>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, textAlign: 'center' }}>
        <Typography variant="body2">&copy; {new Date().getFullYear()} Sangeeth Kreative Studio. All rights reserved.</Typography>
      </Box>
    </MotionDiv>
  );
};

export default FooterComponent;
