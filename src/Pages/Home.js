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
                <div className="col35">
                    <div className="textAlignCenter" centered>
                        <img src={Photo} className='photo'></img>
                        <h2 className = "Livvic"><b>Hi, I'm Naomi!</b></h2>
                        <h3 className = "Livvic">I am a developer and creator.</h3>

                    </div>
                </div>
                <div className="col65">
                    <div className="textAlignJustify" centered>
                        <div className = "paper">
                        <hr></hr>
                        <h4 className = "Livvic">Welcome to my personal website! This is a website I created to as a portfolio.</h4>
                        <h4 className = "Livvic">Please use the menu to navigate between the pages!</h4>
                        <h4 className = "Livvic">My works and list of projects are listed under the works section.</h4>
                        <h4 className = "Livvic">You can also read more about me on my About page!</h4>
                        <h4 className = "Livvic">You can find the source code of this webpage on my <a className = "ulLink" onClick={() => { openURL('https://github.com/Naomikho', true) }}>GitHub.</a></h4>
                        <hr></hr>
                        </div>
                    </div>
                </div>
            </div>


            
        </div>
    );
}

export default Home();