import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Tooltip from '@mui/material/Tooltip';

import Avatar from '../Assets/Avatar.png'

function About(props)
{
    return (
        <div>
            <br></br><br></br><br></br><br></br>
        <Carousel className = "responsiveDiv" autoPlay = {false} navButtonsAlwaysVisible = {true}
        navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
                backgroundColor: 'white',
                color: 'black',
                opacity: "1 !important",
                '&:hover': {
                    opacity: "1 !important"
                },
            }
        }} >
            {Intro()}
            {Skills()}
            {Skills2()}
        </Carousel>
        </div>
    )
}

function Intro(props)
{
    return (
        <Paper className = "carouselItem" sx={{ minHeight: 8/10 }}>
            <br></br>
            <h1 className = "Inter">About Me</h1>
            <img className = "avatar" src = {Avatar}></img>
            <h2>{'Naomi Kho Yi Ning'}</h2>
            <h4>{'Aspiring Developer & Creator'}</h4>
            <div className = "carouselText">
            <p>{'I am a Computer Science graduate with great passion in the CS/IT field. As a developer, I design solutions for problems and write implementations using code.'}</p>
            <p>{'I love code and I aspire to become a web or software developer. :)'}</p>
            <p>{'I strive to become a better version of myself every day.'}</p>
            </div>
        </Paper>
    )
}

function Skills(props)
{
    return(
        <Paper className = "carouselItem" sx={{ minHeight: 8/10 }}>
        <br></br>
        <h2>{'Skills and Experience'}</h2>
        <div className = "carouselText">
        <h4>Web Development</h4>
        <p>{'Build webapp UI with ReactJS, HTML, CSS. Interacting with back-end via FASTAPI & websocket. Deployed webapp using Docker on Linux server.'}</p>
        <h4>Game Development</h4>
        <p>{'Construct game system and simple 2D minigames using Unity Game Engine.'}</p>
        <h4>Working with teams</h4>
        <p>{'Collaborate with project members in CI/CD environment using Github. Adopt agile development with Trello’s project management tools. Worked on final year employer project by involving clients in early development phases to obtain feedback for the next iteration.'}</p>
        </div>
    </Paper>
    )
}

function Skills2(props)
{
    return(
        <Paper className = "carouselItem" sx={{ minHeight: 8/10 }}>
        <br></br>
        <h2>{'Skills and Experience'}</h2>
        <div className = "carouselText">
        <h4>Software Development</h4>
        <p>{'Worked on multiple software projects with my teammates during my Bachelor\'s degree. '}</p>
        <h4>UI/UX</h4>
        <p>{'Design user interface using user-centered design principles in Figma or Adobe XD. '}</p>
        <h4>Graphic Design</h4>
        <p>{'Perform simple graphic design and editing using Photoshop or Clip Studio Paint.'}</p>
        </div>
    </Paper>
    )
}

export default About();