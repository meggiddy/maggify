import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';

function SideBar() {
  return (
    <div className="sidebar">
      <img
      className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      ></img>
      <SidebarOption Icon={HomeOutlinedIcon} title="Home" />
      <SidebarOption Icon={SearchOutlinedIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicOutlinedIcon} title="Your Library" />
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />
      <SidebarOption title='HipHop' />
      <SidebarOption title='HipHop' />
      <SidebarOption title='HipHop' />
    </div>
  );
}

export default SideBar;
