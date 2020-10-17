import { EmojiFlagsSharp, ExpandMoreOutlined, LocalHospitalSharp } from '@material-ui/icons';
import React from 'react';
import SidebarRow from './SidebarRow';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Sidebar.css';
function Sidebar() {
    return (
        <div className="sidebar">
        
        
            <SidebarRow  title='Nader fs' />

            <SidebarRow Icon={LocalHospitalSharp} title='COVID-19 Information Center'/>

            <SidebarRow    
            Icon={EmojiFlagsSharp}
            title='Pages' />

            <SidebarRow Icon={PeopleIcon} title='Friends' />

            <SidebarRow Icon={ChatIcon} title='Messenger' />

            <SidebarRow Icon={StorefrontIcon} title='Market' />

            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />

            <SidebarRow Icon={ExpandMoreOutlined} title='MarketPlace' />
        
      
        </div>


    )
}

export default Sidebar
