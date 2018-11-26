import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Moment from 'react-moment';
import millisec from 'millisec';

class Card extends Component {
  handleClick = () => {
    const { songList, index } = this.props;
    const { trackId } = songList[index];

    this.props.history.push({
      pathname: `/tunes/${trackId}`,
      state: { songList, index }
    });
  };
        
  render() {
    const { index, songList } = this.props;
    const tunes = songList[index];

    return (
      <div onClick={this.handleClick} className=" container  card ">
          <p><b>{tunes.trackName}</b></p>
          <p><b>{tunes.artistName}</b></p>
          <p> 
            <Moment format="YYYY/MM/DD"> 
             {tunes.releaseDate} 
            </Moment>
          </p>
          <p><b>{tunes.collectionName}</b></p>
          <p>{millisec(tunes.trackTimeMillis).format('mm : ss')}</p>
          <p>{tunes.primaryGenreName}</p>
          <p>${tunes.trackPrice}</p>
          <img className=" album-thumbnail " src={tunes.artworkUrl100} alt={tunes.artistName}></img>
      </div>
    )
  }
}
export default withRouter(Card);
