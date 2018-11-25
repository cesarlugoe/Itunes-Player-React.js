
import React, { Component } from 'react'
import itunesServer from '../lib/ItunesService';
import SocialSharing from '../components/SocialSharing';

/* I understand there should be only one Redux store at the root of the app to handle the complete state, I haven't
used Redux before and it seem more digestible to use it in this file only, but I'm certain I can handle it in time */ 

import musicPlayer from '../reducers/index';
import { createStore } from 'redux';

const store = createStore(musicPlayer);

export default class MusicPlayer extends Component {

  state = {
    song: {},
    isLoading: true,
  }

  componentDidMount = () => {
    this.setState({
      isLoading: true,
      currentSongIndex: this.props.location.state.index,
    }, () => this.findTune());
  }


  findTune = () => {
    const storeState = store.getState();
    const currentSongIndex = storeState.songChanger;
    const songId = this.props.location.state.songList[currentSongIndex].trackId;

    itunesServer.findTuneById(songId)
    .then( tunesResponse => {
      const song = tunesResponse.data.results[0];
      this.setState({
        song,
        isLoading: false,
      })
    })
  }

  handleChangeSong = (value) => {
    const storeState = store.getState();
    
    if (storeState.songChanger > 0 || value === 'NEXT'){
      store.dispatch({
        type: value,
      }) 
    this.findTune();
  }
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
              <div className=" change-controlers ">
                <button onClick={(e) => this.handleChangeSong('PREVIOUS', e)}>previous</button>
                <button onClick={(e) => this.handleChangeSong('NEXT', e)}>next</button>
              </div>
              <SocialSharing content={song}/>
            </div>
        }   
      </div>
    )
  }
}
