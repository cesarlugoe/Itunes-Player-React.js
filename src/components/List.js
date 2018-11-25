import React, { Component } from 'react';
import Card from '../components/Card';

export default class List extends Component {

  state = {
    results: [],
  }

  componentDidMount = () => {
    const { results } = this.props.tunesQueryData.data;

    this.setState({
      results,
    })
  }

  displaySongResults = (results) => {

    return results.map(song => {
       return <Card key={song.trackId} tunes={song} />
    })
  }

  sortByProperty = (property) => {
    const { results } = this.state;

    if (property === 'length') {
      results.sort((a,b) => a.trackTimeMillis- b.trackTimeMillis)
    }
    else if (property === 'genre') {
      results.sort((a,b) => a.primaryGenreName- b.primaryGenreName)
    }
    else {
      results.sort((a,b) => a.trackPrice- b.trackPrice)
    }

    this.setState({
      results,
    })
  }

  render() {
    const { results } = this.state;

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
