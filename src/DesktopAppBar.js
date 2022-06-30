import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import BasicMenu from './WorksMenu';
import Name from './name.png';

const openURL = (url) => {
    window.open(url, "_self");
  }

export default function DesktopAppBar(){
    return (
        <div>
        <Box sx={{ flexGrow: 0 }}>
        <AppBar position="sticky">
            <Toolbar disableGutters>
              <Box
                component="img"
                sx={{
                  height: 40,
                  width: 180,
                  pr: 72
                }}
                alt="Naomi Kho"
                src={Name} />
              <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  key={"Home"}
                  onClick={() => openURL('/')}
                  sx={{ my: 2, color: 'white', display: 'block', px: 4}}
                >Home
                </Button>
                <Button
                  key={"About"}
                  onClick={() => openURL('/About')}
                  sx={{ my: 2, color: 'white', display: 'block', px: 4}}
                >About
                </Button>
                
                <BasicMenu></BasicMenu>

                <Button
                  key={"Socials"}
                  onClick={() => openURL('/Socials')}
                  sx={{ my: 2, color: 'white', display: 'block', px: 4}}
                >Socials
                </Button>
              </Box>
            </Toolbar>
        </AppBar>
        </Box>
        </div>
    );
}