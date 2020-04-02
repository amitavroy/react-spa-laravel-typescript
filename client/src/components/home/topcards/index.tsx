import React, { Component } from 'react';
import SmallBox from './../../common/smallbox';

class TopCards extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <SmallBox
            icon="ion-bag"
            colorClass="bg-info"
            stats="150"
            label="New orders"
            linkLabel="More info"
            onClickHandler={(data) => { console.log(data) }} />
        </div>
        <div className="col-md-3 col-sm-12">
          <SmallBox
            icon="ion-stats-bars"
            colorClass="bg-success"
            stats="53%"
            label="Bounce rates"
            linkLabel="More info"
            onClickHandler={(data) => { console.log(data) }} />
        </div>
        <div className="col-md-3 col-sm-12">
          <SmallBox
            icon="ion-person-add"
            colorClass="bg-warning"
            stats="44"
            label="User registrations"
            linkLabel="More info"
            onClickHandler={(data) => { console.log(data) }} />
        </div>
        <div className="col-md-3 col-sm-12">
          <SmallBox
            icon="ion-pie-graph"
            colorClass="bg-danger"
            stats="65"
            label="Unique visitors"
            linkLabel="More info"
            onClickHandler={(data) => { console.log(data) }} />
        </div>
      </div>
    );
  }
}

export default TopCards;
