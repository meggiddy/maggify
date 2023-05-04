import "./SongRow.css";


function SongRow({ track, playSong }) {
  return (
    <div className="song_row" onClick={()=> playSong(track.id)}>
      <img
        alt=""
        src={track.album.images[0].url}
        className="song_row_album"
      ></img>
      <div className="song_row_info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}-{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
