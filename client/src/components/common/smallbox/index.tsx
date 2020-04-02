import React, { Component } from 'react';

interface Props {
  stats: string
  label: string
  linkLabel: string
  colorClass: string
  onClickHandler: any
  icon: string
}

class SmallBox extends Component<Props> {
  handleLinkClick(event) {
    event.preventDefault();
    const data = [1, 2, 3];
    this.props.onClickHandler(data);
  }

  render() {
    const { stats, label, linkLabel, colorClass, icon } = this.props;
    return (
      <div className={`small-box ${colorClass}`}>
        <div className="inner">
          <h3>{stats}</h3>
          <p>{label}</p>
        </div>
        <div className="icon">
          <i className={`ion ${icon}`}></i>
        </div>
        <a href="/" className="small-box-footer" onClick={(event) => this.handleLinkClick(event)}>
          {linkLabel}
          <i className="fas fa-arrow-circle-right"></i>
        </a>
      </div>
    );
  }
}

export default SmallBox;
