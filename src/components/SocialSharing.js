import React, { Component } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon
} from "react-share";

export default class SocialSharing extends Component {
  render() {
    const { content } = this.props;
    const message = `I'm listening to ${content.trackName} from ${content.artistName} at`;
    const shareUrl = "http://hosco.com";

    return (
      <div className=" share-container container ">
        <FacebookShareButton
          url={shareUrl}
          quote={message}
          className=" share-btn "
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton
          url={shareUrl}
          title={message}
          className=" share-container container "
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <LinkedinShareButton
          url={shareUrl}
          title={message}
          windowWidth={750}
          windowHeight={600}
          className=" share-container container "
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>

        <RedditShareButton
          url={shareUrl}
          title={message}
          windowWidth={660}
          windowHeight={460}
          className=" share-container container "
        >
          <RedditIcon size={32} round />
        </RedditShareButton>
      </div>
    );
  }
}
