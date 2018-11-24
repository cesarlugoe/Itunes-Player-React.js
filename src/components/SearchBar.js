import React, { Component } from 'react'

export default class SearchBar extends Component {

  state = {
    query: '',
  }

  onChange = (event) => {
    this.setState({
      query: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { query } = this.state;

    this.props.handleSearch(query);
  }


  render() {
    const { query } = this.state;

    return (
      <form className=" form container " onSubmit={this.handleSubmit}>
        <input className=" search-bar " placeholder="enter artist, song or album..." type="text" value={query}  onChange={this.onChange} />
        <input className=" button " type="submit" value="search"/>
      </form>
    )
  }
}
