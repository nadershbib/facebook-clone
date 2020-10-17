import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './Story.css';
function Story({image,profileSrc,title}) {
    return (
        <div style={{backgroundImage:`url(${image})`}} className="story storyReel__story">
           <IconButton>
               <Avatar src={profileSrc} />

           </IconButton>
           <h4>{title}</h4>   
        </div>
    )
}

export default Story
