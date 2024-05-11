import Sidebar from "../../sidebar/Sidebar";
import Topbar from "../../topbar/Topbar";
import Feed from "../../Feed/Feed";
import Rightbar from "../../rightbar/Rightbar";
import "./Home.css"


export default function Home(){ 

    return(
        <div>
            <Topbar/>
            <div className="homeContainer">
            <Sidebar/>
            <Feed/>


                  <Rightbar  />

            </div>
             
        </div>
    )
}