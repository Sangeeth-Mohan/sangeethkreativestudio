import React from 'react';
import {AppBar, Toolbar, Typography} from '@mui/material';
import { MotionDiv } from '../../utils/motion'; 

const HeaderComponent = ()=> {
    return (
        <MotionDiv>
            <AppBar position='static'>
                <Toolbar>
                    <Typography>Sangeeth Kreative Studio</Typography>
                </Toolbar>
            </AppBar>
        </MotionDiv>
        
    )
}
export default HeaderComponent;