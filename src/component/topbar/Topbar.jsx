import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

import "./Topbar.css"
export default function  Topbar(){

    return(
  <div className="topbarContainer">
    <div className="topbarLeft">
      <span className="Logo">Social World </span>
    </div>
    <div className="topbarCenter">
      <div className="searchbar">
        <SearchIcon className="SearchIcon"/>
<input placeholder="Search for friends" className="searchInput" />


      </div>
    </div>
    <div className="topbarRight">

      <div className="topbarLinks">
        <span className="topbarLink">Homepage</span>
        <span className="topbarLink">Timeline</span>

      </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <PersonIcon/>
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <ChatIcon/>
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <NotificationsIcon/>
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
      <img src="/assets/person/1.jpeg" alt="logo" className="topbarImg" />
    </div>


  </div>
    )
}