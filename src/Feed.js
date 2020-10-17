import React, { useEffect } from 'react'
import './Feed.css';
import StoryReel from './StoryReel.js' 
import MessageSender from './MessageSender';
import Post from "./Post"
import { useState } from 'react';
import db from './firebase'
function Feed() {

    const [posts,setPosts] = useState([]);

    useEffect(()=>{

        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>{
             setPosts(snapshot.docs.map(doc=>({
                 id:doc.id,
                 data:doc.data(),

                 })
               )
             )
        })




    },[])
   

 


    return (
        <div className='feed'>
           <StoryReel />
           <MessageSender />  

           {
               posts.map(postObj=>(
                  <Post 
                  key={postObj.id}
                  profilePic={postObj.data.profilePic} image={postObj.data.image &&postObj.data.image} 
                  username={postObj.data.username}
                  timestamp={postObj.data.timestamp}
                  message={postObj.data.message}    
                  />   
               ))
           }    
        
        </div>
    )
}

export default Feed;
