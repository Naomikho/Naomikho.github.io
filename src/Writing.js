import React, { useState } from 'react';

import PortfolioCard from './Components/PortfolioCard';

function Writing(){
    return (
        <div className = "textAlignCenter">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <PortfolioCard iconName = "LinkedIn" title = 'Educational Blog' role = 'N/A' tools = 'N/A' 
        link = 'https://www.linkedin.com/in/naomikho/recent-activity/shares/'
        desc = 'I write about things that I have learnt on my dev journey.'></PortfolioCard>
    </div>
    )
}

export default Writing();