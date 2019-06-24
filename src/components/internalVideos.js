import React, { Component } from 'react';
import VideoManager from 'wcng-ui-common/lib/video/VideoManager';
import StreamUrl from './streamUrl';
import '../css/video-js.min.css';

const playerConfigOverrideHLSOff = {
    html5: {
      nativeAudioTracks: true,
      nativeVideoTracks: true,
      hls: {
        overrideNative: false
      }
    }
}

class InternalVideos extends Component {
  constructor(props) {
    super(props);
    this.videoManager = new VideoManager();
  }

  componentDidMount() {
    
  }

  handleStreamUrlChange = (url) => {
    console.log('new stream url=' + url);
    let urls = [url];
    this.videoManager.initiate('overrideNative-on-player', {}, urls);
    this.videoManager.initiate('overrideNative-off-player', playerConfigOverrideHLSOff, urls);
  }

  render() {
    return (
      <div>
        <StreamUrl handleStreamUrlChange={this.handleStreamUrlChange} />
        <h1>HLS Video with overrideNative ON</h1>
        <video
          id='overrideNative-on-player'
          className="video-js vjs-default-skin vjs-big-play-centered"
          autoPlay
          preload="true"
          muted={true} 
          width='320'
          height='180'
          controls>
          {/*<source src='http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8' type='application/vnd.apple.mpegurl'/>*/}
        </video>
        <h1>HLS Video with overrideNative OFF</h1>
        <video
          id='overrideNative-off-player'
          className="video-js vjs-default-skin vjs-big-play-centered"
          autoPlay
          preload="true"
          muted={true} 
          width='320'
          height='180'
          controls>
          {/*<source src='http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8' type='application/vnd.apple.mpegurl'/>*/}
        </video>
      </div>
    )
  }
}

export default InternalVideos;