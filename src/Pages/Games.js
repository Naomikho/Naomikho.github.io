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


function Games(){
    return (
        <div className = "textAlignCenter">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2 className = "Inter">Projects I Participated in</h2>
        {games.map(row => {return <PortfolioCard iconName = {row.iconName} title = {row.title}
                                                     role = {row.role} tools = {row.tools}
                                                     link = {row.link} desc = {row.desc}></PortfolioCard>})}
    </div>
    )
}

export default Games();