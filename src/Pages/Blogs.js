import React, { useState } from 'react';

import PortfolioCard from '../Components/PortfolioCard';

const works = [
    {iconName : "LinkedIn",
     title : "Educational Blog",
     role : "N/A",
     tools : "N/A",
     link : "https://www.linkedin.com/in/naomikho/recent-activity/shares/",
     desc : 'I write and share things I have learnt on my dev journey.'},
];

function Blogs(){
    return (
        <div className = "textAlignCenter">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {works.map(row => {return <PortfolioCard iconName = {row.iconName} title = {row.title}
                                                     role = {row.role} tools = {row.tools}
                                                     link = {row.link} desc = {row.desc}></PortfolioCard>})}
    </div>
    )
}

export default Blogs();