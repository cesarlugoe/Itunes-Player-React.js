
import React, { Component } from 'react'
import itunesServer from '../lib/ItunesService';
import { 
  FacebookShareButton, 
  LinkedinShareButton, 
  TwitterShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon, 
  LinkedinIcon,
  RedditIcon,
 } from 'react-share';

export default class MusicPlayer extends Component {

  state = {
    song: {},
    isLoading: true,
  }

  componentDidMount = () => {
    this.setState({
      isLoading: true,
    })

    const songId = this.props.match.params.id;

    itunesServer.findTuneById(songId)
    .then( tunesResponse => {
      const song = tunesResponse.data.results[0];
      this.setState({
        song,
        isLoading: false,
      })
    })
  }

  render() {

    const { song, isLoading } = this.state;
    const message = `I'm listening to ${song.trackName} from ${song.artistName}`;
    const shareUrl = 'http://hosco.com';

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
              <div className=" share-container container ">

              <FacebookShareButton
                url={shareUrl}
                quote={message}
                className=" share-btn ">
                <FacebookIcon
                  size={32}
                  round />
              </FacebookShareButton>

              <TwitterShareButton
                url={shareUrl}
                title={message}
                className=" share-container container ">
                <TwitterIcon
                  size={32}
                  round />
              </TwitterShareButton>

              <LinkedinShareButton
                url={shareUrl}
                title={message}
                windowWidth={750}
                windowHeight={600}
                className="Demo__some-network__share-button">
                <LinkedinIcon
                  size={32}
                  round />
              </LinkedinShareButton>

              <RedditShareButton
                url={shareUrl}
                title={message}
                windowWidth={660}
                windowHeight={460}
                className="Demo__some-network__share-button">
                <RedditIcon
                  size={32}
                  round />
              </RedditShareButton>
              </div>
              
            </div>
        }   
      </div>
    )
  }
}
