import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import Avatar from '../Assets/Avatar.png'

function About(props)
{
    var items = [
        {
            name: "Test #1",
            description: "Probably the most random thing you have ever seen!"
        }
    ]

    return (
        <div>
            <br></br><br></br><br></br><br></br>
        <Carousel className = "responsiveDiv" autoPlay = {false}>
            {Intro()}
            {Skills()}
        </Carousel>
        </div>
    )
}

function Item(props)
{
    return (
        <Paper className = "carouselItem">
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
        </Paper>
    )
}

function Intro(props)
{
    return (
        <Paper className = "carouselItem">
            <br></br>
            <h1>About Me</h1>
            <img className = "avatar" src = {Avatar}></img>
            <h2>{'Naomi Kho Yi Ning'}</h2>
            <h4>{'Aspiring Game Developer & Creator'}</h4>
            <div className = "carouselText">
            <p>{'I am a Computer Science graduate with great passion for creating software and games. As a developer, I design solutions for problems and write implementations using code.'}</p>
            <p>{'I am currently the main programmer of a doujin circle named チョコマメ. We are currently developing a dating sim named Kanojo Stories; you can check out the details under the Works section! '}</p>
            <p>{'I also do freelance work in my free time.'}</p>
            </div>
        </Paper>
    )
}

function Skills(props)
{
    return(
        <Paper className = "carouselItem">
        <br></br>
        <h2>{'Skills and Experience'}</h2>
        <div className = "carouselText">
        <h4>Web Development</h4>
        <p>{'Build webapp UI with ReactJS, HTML, CSS. Interacting with back-end via FASTAPI & websocket. Deployed webapp using Docker on Linux server.'}</p>
        <h4>Game Development</h4>
        <p>{'Construct game system and simple 2D minigames using Unity Game Engine.'}</p>
        <h4>Working with teams</h4>
        <p>{'Collaborate with project members in CI/CD environment using Github. Adopt agile development with Trello’s project management tools. Worked on final year employer project by involving clients in early development phases to obtain feedback for the next iteration.'}</p>
        <h4>UI/UX</h4>
        <p>{'Design user interface using user-centered design principles in Figma or Adobe XD. '}</p>
        <h4>Graphic Design</h4>
        <p>{'Perform simple graphic design and editing using Photoshop or Clip Studio Paint.'}</p>
        </div>
    </Paper>
    )
}

function IntroCard(props){
    return(
        <Paper>
            
        </Paper>
    )
}

export default About();