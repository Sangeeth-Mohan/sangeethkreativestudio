import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { MotionDiv } from '../../utils/motion'; 

const NavBar = () => {
    return (
        <MotionDiv transition={{duration:0.5, delay:0.3}}>
            <AppBar position="static">
                <Toolbar>
                    <Button>Home</Button>
                    <Button>About</Button>
                    <Button>Projects</Button>
                    <Button>Contacts</Button>
                </Toolbar>
            </AppBar>

        </MotionDiv>
    )
}

export default NavBar;