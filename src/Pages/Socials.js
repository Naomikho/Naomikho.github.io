import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import SocialCard from '../Components/SocialCard';

const contacts = [
  {
    title : 'Email',
    handle : 'khoyining9@gmail.com',
    hasLink : false,
    imageName: 'email'
  },
  {
    title : 'Discord',
    handle : 'Naomi Kho Yining#6640',
    hasLink : false,
    imageName: 'discord'
  }
];

const socials = [
  {
    title: "LinkedIn",
    handle: "Kho Yi Ning",
    hasLink: true,
    url: 'https://www.linkedin.com/in/naomikho/',
    imageName: 'linkedin'
  },
  {
    title: "Github",
    handle: "Naomikho",
    hasLink: true,
    url: 'https://github.com/Naomikho',
    imageName: 'linkedin'
  },
  {
    title: "LinkTree",
    handle: "Naomi Kho Yi Ning",
    hasLink: true,
    url: 'https://linktr.ee/naomikho',
    imageName: 'linktree'
  }
];

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
                  {contacts.map(row => {return <SocialCard title = {row.title} handle = {row.handle} hasLink = {row.hasLink} imageName = {row.imageName}></SocialCard>})}
                </div>

                <div class="column">
                  Follow
                  {socials.map(row => {return <SocialCard title = {row.title} handle = {row.handle} hasLink = {row.hasLink} url = {row.url} imageName = {row.imageName}></SocialCard>})}
                </div>
            </div>
        </div>
    );
}

export default Socials();