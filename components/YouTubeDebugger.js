const React = require('react');

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
    this.bitrateButton = this.bitrateButton.bind(this);
    this.resolutionButton = this.resolutionButton.bind(this);
  }
  bitrateButton() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {bitrate: 12})
    })
  }
  resolutionButton() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {video: {resolution: '720p'}})
    })
  }
  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.bitrateButton}>Bitrate</button>
        <button className="resolution" onClick={this.resolutionButton}>Resolution</button>
      </div>
    )
  }
}

module.exports = YouTubeDebugger;
