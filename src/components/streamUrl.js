import React, { Component } from 'react';


class StreamUrl extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
        url: ''
    }
  }

  handleChange(event) {
    this.setState({url: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleStreamUrlChange(this.state.url);
  }

  render() {
    return (
        <form>
            <label>
                <div>
                    Enter stream url:
                </div>
                <input type="text" name="url"  value={this.state.url} onChange={this.handleChange} style={{width: '400px', padding: '5px'}}/>
            </label>
            <input type="submit" value="Enter" onClick={this.handleSubmit} style={{marginLeft: '5px', cursor: 'pointer'}}/>
      </form>
    );
  }
}

export default StreamUrl;