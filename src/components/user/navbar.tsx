import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [auth, setAuth] = useState(true);
  const AuthToken = localStorage.getItem("token")
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
  const [token, getToken] = React.useState(AuthToken || "")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };
    const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

    const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Home', 'Write A Letter', 'About Us'].map((text, index) => (
          <ListItem  key={text} disablePadding>
            <Link className='text-black nav1 !text-decoration-none'  to={`/${text.toLowerCase().replace(/\s+/g, '-')}`}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText  className='text-decoration-none w-full  block'  primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      {
        token &&
        <div>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <Link to={`/dashboard/${text.toLowerCase().replace(/\s+/g, '-')}`}>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
      }
    </Box>
  );


  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1,  }}>
      <AppBar className="md:px-10 sm:px-6"  sx={{backgroundColor: "transparent", boxShadow: "none"}} position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="#000"  sx={{ mr: 2 }} onClick={toggleDrawer(true)}><MenuIcon /></IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#000", fontWeight: "bold"}} className='title italic'> EchoMorrow</Typography>
          {token ?(
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          ): (
            <Link className="!text-black text-decoration-underline bg-[#ECECF0] px-3 py-2"  to={"/sign-in"}>Log In</Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
