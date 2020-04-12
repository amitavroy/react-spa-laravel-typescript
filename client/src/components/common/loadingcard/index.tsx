import React, { Component } from "react";

class LoadingCard extends Component {
  render() {
    return (
      <div className="overlay">
        <i className="fas fa-2x fa-sync-alt fa-spin"></i>
      </div>
    );
  }
}

export default LoadingCard;
