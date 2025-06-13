import * as React from 'react';
import { ColorPaletteProp } from '@mui/joy/styles';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Sheet

      variant="solid"
      invertedColors
      sx={[
        {
          flexGrow: 1,
          p: 2,
          borderRadius: { xs: 0, sm: 'sm' },
          bgcolor: "transparent"
        },
      ]}
    >
      <Box className="justify-between" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <div className='flex gap-2'>
          <IconButton variant="outlined" className='bg-lime-100'>
            <FacebookRoundedIcon className='text-black' />
          </IconButton>
          <IconButton variant="outlined"  className='bg-lime-100'>
            <GitHubIcon className='text-black'/>
          </IconButton>
        </div>
        <div className='gap-3 link justify-end flex'>
          <Link className='text-lime-950' to={"/about-us"}>About</Link>
          <Link className='text-lime-950' to={"/"}>Home</Link>
          <Link className='text-lime-950' to={"/contact-us"}>Contact</Link>
        </div>
      </Box>
      <Divider  sx={{ my: 2, bgcolor: "#000" }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-start' },
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
      </Box>
    </Sheet>
  );
}
