import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './Header.css'
import {fbLogo} from './facebbok-logo'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import FlagSharpIcon from '@material-ui/icons/FlagSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import SupervisedUserCircleSharpIcon from '@material-ui/icons/SupervisedUserCircleSharp';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import ForumSharpIcon from '@material-ui/icons/ForumSharp';
import NotificationsActiveSharpIcon from '@material-ui/icons/NotificationsActiveSharp';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import { useStateValue } from './StateProvider';
function Header() {

    const [{user},dispatch] = useStateValue();


    return (
        <div className="header">
           <div className="header__left">
            <img src={fbLogo} alt=""/>

            <div className="header__input">
                <SearchSharpIcon />
                <input type="text" placeholder="Search Facebook"/>

            </div>

           </div>

           <div className="header__center">
           {/* 1 icon */}
              <div className="header__option header__option--active">
                  <HomeSharpIcon  fontSize="large"/>
              </div>
            {/*end of 1 icon  */}
           {/* 1 icon */}
              <div className="header__option">
                  <FlagSharpIcon  fontSize="large"/>
              </div>
            {/*end of 1 icon  */}
           {/* 1 icon */}
              <div className="header__option">
                  <SubscriptionsSharpIcon  fontSize="large"/>
              </div>
            {/*end of 1 icon  */}
           {/* 1 icon */}
              <div className="header__option">
                  <SupervisedUserCircleSharpIcon  fontSize="large"/>
              </div>
            {/*end of 1 icon  */}
              
           </div>

           <div className="header__right">
               <div className="header__info">
                   <Avatar src={user.photoURL} />
                   <h4>{user.displayName}</h4>
               </div>
  
               <IconButton>
                   <AddSharpIcon />
               </IconButton>
               <IconButton>
                   <ForumSharpIcon />
               </IconButton>
               <IconButton>
                   <NotificationsActiveSharpIcon />
               </IconButton>
               <IconButton>
                   <ExpandMoreSharpIcon />
               </IconButton>

           </div>
        </div>
    )
}

export default Header
