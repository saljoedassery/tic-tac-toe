import React from 'react';

class Square extends React.Component {
  render() {
    return <button onClick={this.props.onClick} disabled={this.props.buttonStatus}>
        {this.props.value}
    </button>;
  }
}

export default Square;
