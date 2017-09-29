import React, { Component } from 'react';
import './BackgroundVideo.css';

class BackgroundVideo extends Component {
  render() {
    return (
  
  <video id="background-video" loop autoplay="loop autoplay">
  <source src="https://www.dropbox.com/s/8ytq2iko4dcfwhi/subway.mp4?dl=1" type="video/mp4"/>
  <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg"/>
  Your browser does not support the video tag.
</video>
    );
  }
}

export default BackgroundVideo;