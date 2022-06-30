import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const openURL = (url) => {
        window.open(url, "_self");
      }

    return (
        <div>
            <Button
                key={"Works"}
                onClick={handleClick}
                sx={{ my: 2, color: 'white', display: 'block', px: 4}}
            >Works
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Games</MenuItem>
                <MenuItem onClick={handleClose}>Software &amp; Systems</MenuItem>
                <MenuItem onClick={handleClose}>Writing &amp; Blogs</MenuItem>
            </Menu>
        </div>
    );
}