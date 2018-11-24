import React, { Component } from 'react';
import Card from '../components/Card';

export default class List extends Component {

  displaySongResults = (results) => {
    return results.map(song => {
       return <Card key={song.trackId} tunes={song} />
    })
  }

  render() {
    const { results } = this.props.tunesQueryData.data;
    return (
      <div className=" container result-list ">
        <div className=" container result-heading ">
          <p>Track</p>
          <p>Artist</p>
          <p>Release Date</p>
          <p>Album</p>
          <p>Length</p>
          <p>Genre</p>
          <p>Price</p>
        </div>
        {this.displaySongResults(results)}
      </div>
    )
  }
}
