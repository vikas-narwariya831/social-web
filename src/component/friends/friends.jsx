import "./friends.css"
function Friends({Users}) {
    console.log(Users)
  return (
    <div>
        <li className="sidebarFriend">
    <img className="sidebarFriendImg" src={Users.profilePicture} alt=""/>
    <span className="sidebarFriendName">{Users.username}</span>
  </li>
  
  </div>
  )
}

export default Friends