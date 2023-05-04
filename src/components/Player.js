import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";
import SideBar from "./Sidebar";

function Player({ spotify }) {
  return (
    <div className="Player">
      <div className="player_body">
        <SideBar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
