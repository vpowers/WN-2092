import React, { Component } from 'react';
import videojs from 'video.js';
import 'videojs-contrib-hls';
import '../css/video-js.min.css';

class NativeAndVideojsVideos extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount(prevProps) {
    const player = videojs('videojs-player');
  }

  render() {
    return (
      <div>
        <h1>Native HTML5 Video</h1>
        <video
          id='native-html5-player'
          width='320'
          height='180'
          controls>
          <source src='http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8' type='application/vnd.apple.mpegurl'/>
        </video>
        <h1>Plain Video.js Player with HLS Plugin</h1>
        <video
          id='videojs-player'
          className="video-js vjs-default-skin vjs-big-play-centered"
          autoPlay
          preload="true"
          muted={true} 
          width='320'
          height='180'
          controls>
          <source src='http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8' type='application/vnd.apple.mpegurl'/>
        </video>
      </div>
    )
  }
}

export default NativeAndVideojsVideos;