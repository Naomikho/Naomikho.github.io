import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import KanojoStories from '../Assets/KanojoStories.png';
import Scrapee from '../Assets/Scrapee.png';
import LinkedIn from '../Assets/linkedin.png';

import {openURL} from '../HelperFunc/openURL';

const getIcon = (name) => {
    if (name == "KanojoStories") return KanojoStories;
    else if (name == "Scrapee") return Scrapee;
    else if (name == "LinkedIn") return LinkedIn;
}

export default function PortfolioCard(props) {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <img className = "portfolioIcon" alt={props.title} src= {getIcon(props.iconName)} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                {props.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {props.role != "N/A" && 'Role: ' + ' ' + props.role}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.tools != "N/A" && 'Tools: ' + ' ' + props.tools}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {props.desc}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                <a className = "whiteText" onClick={() => openURL(props.link,true)}>View Details</a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}