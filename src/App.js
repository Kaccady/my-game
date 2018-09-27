import React, { Component } from 'react';
import PropTypes from 'prop-types';
class App extends Component {
  render() {
    return (
      <div className="App">
      <p>{this.props.message}</p>
      </div>
    );
  }
}
App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;
