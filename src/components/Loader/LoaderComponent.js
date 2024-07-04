import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
      position="fixed"
      top={0}
      left={0}
      bgcolor="rgba(255, 255, 255, 0.7)"
      zIndex={1300}
    >
      <CircularProgress size={60} />
    </Box>
  );
};

export default Loader;
