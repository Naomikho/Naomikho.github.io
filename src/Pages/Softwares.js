import React, { useState } from 'react';

import PortfolioCard from '../Components/PortfolioCard';

const games = [
    {iconName : "KanojoStories",
     title : "Kanojo Stories",
     role : "Main Programmer",
     tools : "Unity, C#",
     link : "https://twitter.com/choco_mame_jp",
     desc : 'Kanojo Stories is a mobile dating sim that is currently being developed by チョコマメ.'},
];


const softwares = [
    {iconName : "Scrapee",
     title : "Scrapee",
     role : "Front-end dev",
     tools : "ReactJS, VSC, GitHub, Docker",
     link : "https://drive.google.com/drive/folders/12SVt5HD0gJeI4P9LQ8HZNeb15eYcUYgL?usp=sharing",
     desc : 'Project Scrapee is a Web Scraper customized for market research purposes.'},
     {iconName : "",
     title : "QTA",
     role : "solo fullstack",
     tools : "ReactJS, VSC, GitHub, Python, FastAPI",
     link : "https://github.com/Naomikho/QueueTicketingApplication",
     desc : 'A small project — simple queue/ticketing application'}
];


function Softwares(){
    return (
        <div className = "textAlignCenter">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2 className = "Inter">Projects</h2>
        {softwares.map(row => {return <><PortfolioCard iconName = {row.iconName} title = {row.title}
                                                     role = {row.role} tools = {row.tools}
                                                     link = {row.link} desc = {row.desc}></PortfolioCard><br></br></>})}
    </div>
    )
}

export default Softwares();