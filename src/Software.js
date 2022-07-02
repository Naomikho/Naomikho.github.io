import React, { useState } from 'react';

import PortfolioCard from './PortfolioCard';

function Software(){
    return (
        <div className = "textAlignCenter">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <PortfolioCard iconName = "Scrapee" title = 'Scrapee' role = 'Front-end dev' tools = 'ReactJS, VSC, GitHub, Docker' 
        link = 'https://drive.google.com/drive/folders/12SVt5HD0gJeI4P9LQ8HZNeb15eYcUYgL?usp=sharing'
        desc = 'Project Scrapee is a Web Scraper customized for market research purposes.'></PortfolioCard>
    </div>
    )
}

export default Software();