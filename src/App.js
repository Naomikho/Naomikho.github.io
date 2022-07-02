import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import About from "./About";
import Socials from './Socials';
import Games from './Games';
import Writing from './Writing';
import Software from './Software';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes, Switch, Link} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive';

import DesktopAppBar from './DesktopAppBar';

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
        <DesktopAppBar/>

        <div className = "appBody">
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={Home} exact/>
            <Route path="" element={Home} exact/>
            <Route path="/About" element={About}/>
            <Route path="/Games" element={Games} />
            <Route path="/Software" element={Software} />
            {/* <Route path="/Art" element={Home} /> */}
            <Route path="/Writing" element={Writing} />
            <Route path="/Socials" element={Socials} />
          </Routes>
        </Router>
        </div>


      </ThemeProvider>
    </div>
  );
}

export default App;
