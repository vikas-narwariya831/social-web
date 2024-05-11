import { Users } from "../../dummyData"
import Online from "../Online/online"
import "./Rightbar.css"
export default function Rightbar() {
  console.log(Users)
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Jaadu </b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTittle">Online Friends</h4>
        <ul className="rightbarFriendsList">
        {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
                  </ul>
      </div>
    </div>
  )
}
