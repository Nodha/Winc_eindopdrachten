import React, { Component } from "react"


class SongForm extends Component {
    constructor(){
        super()
        this.state = {
                newSongTitle: "",
                newSongArtist: "",
                newGenre: "",
                newRating: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this) 
    }

    handleChange(event){
        const {value, name} = event.target
        this.setState({ [name]: value })
    }
    handleClick(event){
        event.preventDefault()
        const newSongItem = {
                songTitle: this.state.newSongTitle,
                songArtist: this.state.newSongArtist,
                songGenre: this.state.newGenre,
                songRating: this.state.newRating
        }
        this.props.addSong(newSongItem)
        this.setState({
                newSongTitle:"",
                newSongArtist:"",
                newGenre:"",
                newRating:""
        })
    }

    render(){
        return(
            <div class="form_holder">
                <form>
                    <input 
                        type="text"
                        placeholder="Title"
                        name="newSongTitle"
                        value={this.state.newSongTitle}
                        onChange={this.handleChange}>
                    </input>

                    <input 
                        type="text"
                        placeholder="Artist"
                        name="newSongArtist"
                        value={this.state.newSongArtist}
                        onChange={this.handleChange}>
                    </input>
    
                    <select id="Genre" name="newGenre" size="1" onChange={this.handleChange} value={this.state.newGenre} multiple={false}>
                        <option value="">Genre</option>
                        <option value="Harcore">Hardcore</option>
                        <option value="Rock">Rock</option>
                        <option value="Pop">Pop</option>
                        <option value="Jazz">Jazz</option>
                    </select>
                   
                    <select id="Rating" name="newRating" size="1" onChange={this.handleChange} value={this.state.newRating} multiple={false}>
                        <option value="">Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <button onClick={this.handleClick}>Add Song</button>
                </form>
            </div>
        )
    }
}

export default SongForm