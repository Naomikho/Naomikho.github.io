import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import SocialCard from './SocialCard';
  
const Socials = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            Contact
          </Grid>
          <Grid item xs={5}>
            Socials
          </Grid>
          <Grid item xs={5}>
            <SocialCard title = {'email'} handle = {'khoyining9@gmail.com'} hasLink = {false}/>
          </Grid>
          <Grid item xs={5}>
             <SocialCard title = {'LinkedIn'} handle = {'Kho Yi Ning'} hasLink = {true} url = {'https://www.linkedin.com/in/naomikho/'}/>
          </Grid>
          <Grid item xs={5}>
            <SocialCard title = {'Discord'} handle = {'Naomi Kho Yining#6640'} hasLink = {false}/>
          </Grid>
          <Grid item xs={5}>
             <SocialCard title = {'Github'} handle = {'Naomikho'} hasLink = {true} url = {'https://github.com/Naomikho'}/>
          </Grid>
          <Grid item xs={5}>

          </Grid>
          <Grid item xs={5}>
             <SocialCard title = {'LinkTree'} handle = {'Naomi Kho Yi Ning'} hasLink = {true} url = {'https://linktr.ee/naomikho'}/>
          </Grid>
        </Grid>
      </Box>
    );
  }

export default Socials();