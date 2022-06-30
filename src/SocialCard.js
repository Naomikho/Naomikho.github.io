import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { renderMatches } from 'react-router-dom';

import DiscordIcon from './discord.png';
import GithubIcon from './github.png';
import EmailIcon from './gmail.png';
import LinkedinIcon from './linkedin.png';
import LinktreeIcon from './linktree.png';

const fetchIcon = (iconName) =>{
    if (iconName == "discord") return DiscordIcon;
    else if (iconName == "github") return GithubIcon;
    else if (iconName == "email") return EmailIcon;
    else if (iconName == "linkedin") return LinkedinIcon;
    else if (iconName == "linktree") return LinktreeIcon;
}

const openURL = (url) => {
    window.open(url, "_blank"); //external links open in new window
  }

const SocialCard = (props) => {

  return (
    <Card sx={{ minWidth: 5/6, maxWidth: 5/6, minHeight: 1/4, mx: 'auto', my: 4}}>
      <CardContent>
        {/*Add icon here later*/}
        <Typography sx={{ fontSize: 16 }} color="text.secondary" component = "div" gutterBottom>
          {props.title}&nbsp;&nbsp;{<img className = 'smallIcon' src = {fetchIcon(props.imageName)}/>}
        </Typography>
        <Typography sx = {{fontSize: 18}} variant="h6" component="span">
          {props.handle}
        </Typography>
      </CardContent>
      {props.hasLink == true &&  
      <CardActions className = "socialLinkButton">
        &nbsp;&nbsp;<Button size="small" onClick = {() => openURL(props.url)}>View</Button>
      </CardActions>}
      {
        props.hasLink == false &&  
        <CardActions className = "socialLinkButton">
          &nbsp;&nbsp;<Button size="small" onClick = {() => openURL(props.url)} disabled></Button>
        </CardActions>
      }
    </Card>
  );
}

export default SocialCard;