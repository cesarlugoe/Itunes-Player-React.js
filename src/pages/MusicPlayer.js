import React, { Component } from 'react'
import itunesServer from '../lib/ItunesService';

export default class MusicPlayer extends Component {

  state = {
    song: {},
    isLoading: true,
  }

  componentDidMount = () => {
    this.setState({
      isLoading: true,
    })

    const songId = this.props.match.params.id;

    itunesServer.findTuneById(songId)
    .then( tunesResponse => {
      const song = tunesResponse.data.results[0];
      console.log(song);
      this.setState({
        song,
        isLoading: false,
      })
    })
  }

  render() {

    const { song, isLoading } = this.state;

    return (
      <div>
        {isLoading? <h1>...Loading</h1> 
          : <div className=" music-player container ">
              <p>{song.artistName}</p>
              <img src={song.artworkUrl100} alt={song.collectionName}></img>
              <p>{song.trackName}</p>
              <audio 
                controls
                src={song.previewUrl}>
              </audio>
            </div>
        }   
      </div>
    )
  }
}
