
import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import itunesServer from '../lib/ItunesService';
import List from '../components/List';

export default class HomePage extends Component {

  state = {
    tunesQueryData: [],
    isSearching: false,
    searchSuccess: Boolean,
  }

  componentDidMount = () => {
    this.setState({
      isLoading: false,
    })
  }

  handleTunesSearch = (query) => {
    this.setState({
      isSearching: true,
    })

    itunesServer.findTunes(query)
    .then((tunesResponse) => {
      const tunesQueryData  = tunesResponse.data.results;
      if (tunesQueryData.length > 0) {
        this.setState({
          tunesQueryData,
          isSearching: false,
          searchSuccess: true,
        })
      }
      else {
        this.setState({
          isSearching: false,
          searchSuccess: false,
        })
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  displaySearchResult = () => {
    const { searchSuccess, tunesQueryData } = this.state;
    if (searchSuccess === true) {
      return <List tunesQueryData={tunesQueryData} /> 
    }
    if (searchSuccess === false) {
      return <h4> No results came up from your search </h4>
    }
  }

  render() {
    const { isSearching } = this.state;

    return (
        <div className=" main-page container ">
          <SearchBar handleSearch={this.handleTunesSearch} />
          {isSearching? <img src="/5.gif" alt="gif"></img> 
            :  this.displaySearchResult()
          }
        </div> 
    )
  }
}
