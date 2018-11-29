import React, { Component } from "react";
import Card from "../components/Card";
import helpers from "../helpers/helpers";

export default class List extends Component {
  state = {
    results: []
  };

  componentDidMount = () => {
    const results = this.props.tunesQueryData;
    this.setState({
      results,
    })
  }

  displaySongResults = results => {
    return results.map((song, index) => {
      return <Card key={song.trackId} songList={results} index={index} />;
    });
  };

  sortByProperty = property => {
    const results = this.props.tunesQueryData;
    
    if (property === "length") {
      results.sort((a, b) => a.trackTimeMillis - b.trackTimeMillis);
      helpers.lengthStyle();
    }
    
    if (property === "genre") {
      results.sort((a, b) => {
        const firstTrack = a.primaryGenreName.toUpperCase();
        const secondTrack = b.primaryGenreName.toUpperCase();

        return firstTrack < secondTrack ? -1 : 1;
      });
      helpers.genreStyle();
    }

    if (property === "price") {
      results.sort((a, b) => a.trackPrice - b.trackPrice);
      helpers.priceStyle();
    }
    
    this.setState({
      results
    });
  };


  render() {
    const { results } = this.state;

    return (
      <div className=" container result-list ">
        <div className=" container result-heading ">
          <p >Track</p>
          <p>Release Date</p>
          <p>Album</p>
          <p id="length" onClick={() => {this.sortByProperty("length")}}> Length</p>
          <p id="genre" onClick={() => {this.sortByProperty("genre")}}>Genre</p>
          <p id="price" onClick={() => {this.sortByProperty("price")}}>Price</p>
        </div>
        { this.displaySongResults(results) }
      </div>
    );
  }
}
