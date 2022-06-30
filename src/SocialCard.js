import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { renderMatches } from 'react-router-dom';

const openURL = (url) => {
    window.open(url, "_self");
  }

const SocialCard = (props) => {

    console.log(props.title);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {/*Add icon here later*/}
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h5" component="div">
          {props.handle}
        </Typography>
      </CardContent>
      {props.hasLink == true &&  
      <CardActions>
        <Button size="small" onClick = {() => openURL(props.url)}>View</Button>
      </CardActions>}
    </Card>
  );
}

export default SocialCard();