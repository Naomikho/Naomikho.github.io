import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import SocialCard from './SocialCard';

const Socials = () => {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <h2>Contact Me</h2>
            <div class="row">
                <div class="column">
                  Contact 
                  <SocialCard title={'Email'} handle={'khoyining9@gmail.com'} hasLink={false} imageName = 'email' />
                  <SocialCard title={'Discord'} handle={'Naomi Kho Yining#6640'} hasLink={false} imageName = 'discord'/>
                </div>

                <div class="column">
                  Socials
                  <SocialCard title={'LinkedIn'} handle={'Kho Yi Ning'} hasLink={true} url={'https://www.linkedin.com/in/naomikho/'} imageName = 'linkedin'/>
                  <SocialCard title={'Github'} handle={'Naomikho'} hasLink={true} url={'https://github.com/Naomikho'} imageName = 'github'/>
                  <SocialCard title={'LinkTree'} handle={'Naomi Kho Yi Ning'} hasLink={true} url={'https://linktr.ee/naomikho'} imageName = 'linktree'/>
                </div>
            </div>
        </div>
    );
}

export default Socials();