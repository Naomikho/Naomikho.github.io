import React, { useState } from 'react';
import Photo from '../Assets/profile.jpg';
import Box from '@mui/material/Box';

import { openURL } from '../HelperFunc/openURL';

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
            <br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br>
            <br></br><br></br>
            <div className="row">
                <div className="column">
                    <div className="textAlignCenter" centered>
                        <img src={Photo} className='photo'></img>
                        <h2>Hi, I'm Naomi, a developer and creator.</h2>

                    </div>
                </div>
                <div className="column">
                    <div className="textAlignJustify" centered>
                    <h4>Please use the menu to navigate between the pages.</h4>
                    <h4>You can find my works and portfolio under the works section.</h4>
                    <h4>You can find out more about me on my About page!</h4>
                    <h4>You may find the source code on this webpage on my <a onClick={() => { openURL('https://github.com/Naomikho', true) }}>GitHub.</a></h4>
                    </div>
                </div>
            </div>


            
        </div>
    );
}

export default Home();