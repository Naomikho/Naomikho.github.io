import React, { useState } from 'react';

import PortfolioCard from './PortfolioCard';

function Games(){
    return (
        <div className = "textAlignCenter">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <PortfolioCard iconName = "KanojoStories" title = 'Kanojo Stories' role = 'Main Porgrammer' tools = 'Unity' 
            link = 'https://twitter.com/choco_mame_jp'
            desc = 'Kanojo Stories is a mobile dating sim that is currently being developed by チョコマメ.'></PortfolioCard>
        </div>
    )
}

export default Games();