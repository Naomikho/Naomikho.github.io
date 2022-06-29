import logo from './logo.svg';
import './App.css';
import Home from "./Home";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={darkTheme}>
      
      {/* app bar */}
      <AppBar position="sticky">
          <Toolbar>{/* content */}</Toolbar>
        </AppBar>
        <Toolbar />
      Website is currently still a work in progress.
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={Home} exact />
          <Route path="/About" element={Home} exact />
          <Route path="/Works" element={Home} exact />
          <Route path="/Socials" element={Home} exact />
        </Routes>
      </BrowserRouter >

    </ThemeProvider>
    </div>
  );
}

export default App;
