import { MoreVert } from "@material-ui/icons"
import "./post.css"
import { Users } from "../../dummyData"
import { useState } from "react";
export default function Post({Posts}) {
    const [like,setLike] = useState(Posts.like)
 const[isLiked,setIsLiked]=useState(false)
 const likeHandler=()=>{
  setLike(isLiked ? like-1 : like+1)
 setIsLiked(!isLiked)
 }

    console.log(Posts)
  return (
   <div className="Post">
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImg" src={Users.filter((u)=>u.id===Posts?.userId)[0].profilePicture} alt=" "/>
                <span className="postUserName">{Users.filter((u)=>u.id===Posts?.userId)[0].username}</span>
                <span className="postUserTime">{Posts.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{Posts?.desc}</span>
            <img src={Posts.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
            <img src="/assets/like.png" alt="" className="LikeIcon"  onClick={likeHandler}/>
            <img src="/assets/heart.png" alt="" className="LikeIcon" onClick={likeHandler}/>
            <span className="postLikeCounter">{like} People Like it</span>

            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 Commonets</span>
            </div>
        </div>
    </div>
   </div>
  )
}
