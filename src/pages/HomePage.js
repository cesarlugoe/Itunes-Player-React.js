import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import itunesServer from '../lib/ItunesService';
import List from '../components/List';

export default class HomePage extends Component {

  state = {
    tunesQueryData: {},
    isLoading: true,
  }

  handleTunesSearch = (query) => {
    this.setState({
      isLoading: true,
    })

    itunesServer.findTunes(query)
    .then((tunesResponse) => {
      this.setState({
        tunesQueryData: tunesResponse,
        isLoading: false,
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    const { tunesQueryData } = this.state;

    return (
      <div className=" main-page container ">
        <SearchBar handleSearch={this.handleTunesSearch} />
        { Object.keys(tunesQueryData).length !== 0 ? <List tunesQueryData={tunesQueryData} /> : null }
      </div>
    )
  }
}
