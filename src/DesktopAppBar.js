import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import TerminalIcon from '@mui/icons-material/Terminal';
import CreateIcon from '@mui/icons-material/Create';
import IconButton from '@mui/material/IconButton';
import WorkIcon from '@mui/icons-material/Work';

import BasicMenu from './WorksMenu';
import Name from './name.png';

const menuList = ['/', '/About', '/Socials'];
const worksList = ['/Games', '/Software', '/Writing'];

const openURL = (url) => {
    window.open(url, "_self");
  }

export default function DesktopAppBar(){
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
});

const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }
    console.log("Drawer");

    setState({ ...state, [anchor]: open });
};

const list = (anchor) => (
    <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
            {['Home', 'About', 'Socials'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton onClick = {() => openURL(menuList[index])}>
                        <ListItemIcon>
                            {index == 0 && <HomeIcon/>}
                            {index == 1 && <PersonIcon/>}
                            {index == 2 && <MailIcon/>}
                        </ListItemIcon>
                        <Button className = "textWhite">{text}</Button>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>
          <ListItem key = {'Works'} disablePadding>
                <ListItemText> &nbsp; WORKS</ListItemText>
          </ListItem>
            {['Games', 'Software', 'Blogs'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton onClick = {() => openURL(worksList[index])}>
                        <ListItemIcon>
                            {index == 0 && <VideogameAssetIcon/>}
                            {index == 1 && <TerminalIcon/>}
                            {index == 2 && <CreateIcon/>}
                        </ListItemIcon>
                        <Button className = "textWhite">{text}</Button>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Box>
);

    return (
        <div>
        <Box sx={{ flexGrow: 0 }}>
        <AppBar>
            <Toolbar>
                    <Typography variant="h6" color="inherit" component="div">
                        NaomiKho
                    </Typography>
                <div className = "appbarGap"></div>
                <Button className = "textWhite" onClick = {toggleDrawer('right', true)}><MenuIcon /></Button>
            </Toolbar>
        </AppBar>
        </Box>
        <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
        </div>
    );
}