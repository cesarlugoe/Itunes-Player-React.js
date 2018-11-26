import React, { Component } from 'react';
import Card from '../components/Card';

export default class List extends Component {

  state = {
    results: [],
  }

  displaySongResults = (results) => {

    return results.map((song, index) => {
       return <Card key={song.trackId} songList={results} index={index}/>
    })
  }

  sortByProperty = (property) => {
    const results  = this.props.tunesQueryData;
    
    if (property === 'length') {
      results.sort((a,b) => a.trackTimeMillis- b.trackTimeMillis)
    }
    
    if (property === 'genre') {
      results.sort((a,b) => {
        const firstTrack = a.primaryGenreName.toUpperCase();
        const secondTrack = b.primaryGenreName.toUpperCase();

        return firstTrack < secondTrack?  -1 : 1;
      })
    }

    if (property === 'price') {
      results.sort((a,b) => a.trackPrice- b.trackPrice)
    }
    
    this.setState({
      results,
    })
  }

  render() {
    const results = this.props.tunesQueryData;

    return (
      <div className=" container result-list ">
        <div className=" container result-heading ">
          <p>Track</p>
          <p>Artist</p>
          <p>Release Date</p>
          <p>Album</p>
          <p onClick={() => {this.sortByProperty('length')}}> Length</p>
          <p onClick={() => {this.sortByProperty('genre')}}>Genre</p>
          <p onClick={() => {this.sortByProperty('price')}}>Price</p>
        </div>
        { this.displaySongResults(results) }
      </div>
    )
  }
}
