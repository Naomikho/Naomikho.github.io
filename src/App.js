import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import BasicMenu from './WorksMenu';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes, Switch, Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Name from './name.png';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const openURL = (url) => {
  window.open(url, "_self");
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>

        {/* app bar */}
        <AppBar position="sticky">
          <Container maxWidth="xl">
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
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  key={"Home"}
                  onClick={() => openURL('/')}
                  sx={{ my: 2, color: 'white', display: 'block', px: 8 }}
                >Home
                </Button>
                <Button
                  key={"About"}
                  onClick={() => openURL('/About')}
                  sx={{ my: 2, color: 'white', display: 'block', px: 8 }}
                >About
                </Button>
                
                <BasicMenu></BasicMenu>

                <Button
                  key={"Socials"}
                  onClick={() => openURL('/Socials')}
                  sx={{ my: 2, color: 'white', display: 'block', px: 8 }}
                >Socials
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={Home} exact/>
            <Route path="" element={Home} exact/>
            <Route path="/About" element={Home}/>
            <Route path="/Games" element={Home} />
            <Route path="/Software" element={Home} />
            <Route path="/Art" element={Home} />
            <Route path="/Writing" element={Home} />
            <Route path="/Socials" element={Home} />
          </Routes>
        </Router>

      </ThemeProvider>
    </div>
  );
}

export default App;
