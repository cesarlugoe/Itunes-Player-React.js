import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Card extends Component {

  handleClick = () => {
    const { trackId } = this.props.tunes;
    this.props.history.push(`/tunes/${trackId}`);
  }

  render() {
    const { tunes } = this.props;
    return (
      <div onClick={this.handleClick} className=" container  card ">
          <p><b>{tunes.trackName}</b></p>
          <p><b>{tunes.artistName}</b></p>
          <p>{tunes.releaseDate}</p>
          <p><b>{tunes.collectionName}</b></p>
          <p>{tunes.trackTimeMillis}</p>
          <p>{tunes.primaryGenreName}</p>
          <p>${tunes.trackPrice}</p>
          <img className=" album-thumbnail " src={tunes.artworkUrl100} alt={tunes.artistName}></img>
      </div>
    )
  }
}
export default withRouter(Card);
