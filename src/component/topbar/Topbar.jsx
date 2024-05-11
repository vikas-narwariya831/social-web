import  {Chat, Notifications, Person, Search} from "@material-ui/icons"
import "./Topbar.css"
export default function  Topbar(){

    return(
  <div className="topbarContainer">
    <div className="topbarLeft">
      <span className="Logo">Social World </span>
    </div>
    <div className="topbarCenter">
      <div className="searchbar">
        <Search className="SearchIcon"/>
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
          <Person/>
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Chat/>
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Notifications/>
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
      <img src="/assets/person/1.jpeg" alt="logo" className="topbarImg" />
    </div>


  </div>
    )
}