import React from "react"
import SongItem from "./SongItem"

function SongList(props) {
    const handleRemoveSong = props.handleClick
    const songList = props.songs
    const mapSongs = songList.map(element => <SongItem 
                     songs={element}
                     key={element.songId}
                     handleClick={handleRemoveSong}/>
)
    
    return (
        <table>
            <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Genre</th>
                <th>Rating</th>
                <th>Remove</th>
            </tr>
                {mapSongs}
        </table>
    )
}


export default SongList