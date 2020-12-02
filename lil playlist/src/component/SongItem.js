import React from "react"
// Li maken met songitems 
//li is een nope
//gebruik hier props
//maak button
// class of functie?

function SongItem(props) {
    return(
            <tr>
                <td className="songItem">{props.songs.songTitle}</td>
                <td className="songItem">{props.songs.songArtist}</td>
                <td className="songItem">{props.songs.songGenre}</td>
                <td className="songItem">{props.songs.songRating}</td>
                <td><button onClick={() => props.handleClick(props.songs.songId)}>Remove song</button></td>
            </tr>    
    )
}


export default SongItem