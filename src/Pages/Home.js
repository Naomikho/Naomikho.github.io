import React, { useState } from 'react';
import Photo from '../Assets/profile.jpg';
import Box from '@mui/material/Box';

const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    width: '160px',
    height: '150px',
  };

function Home() {
    return (
        <div>
            <div class="outer">
                <div class="middle">
                    <div class="inner">
                        <div className="textAlignCenter" centered>
                               <img src = {Photo} className = 'photo'></img>
                            <h1>Hi, I'm Naomi, a developer and creator.</h1>
                            <br></br>
                            <h4>You can find my works and portfolio under the works section.</h4>
                            <h4>You can find out more about me on my About page!</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home();