import Post from "../post/Post"
import Share from "../share/Share"
import "./Feed.css"
import { Posts } from "../../dummyData"
export default function Feed() {
  return (
    <div className="feed">

   <div className="feedWrapper">
    <Share/>
    {Posts.map((p)=>(

<Post key={p.id} Posts={p}/>
   
    ))
  }
    
   </div>

    </div>
  )
}
