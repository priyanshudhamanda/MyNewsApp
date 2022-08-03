import React, { Component } from "react";
//import loading from './loading.gif'

export class spinner extends Component {
  render() {
    return (
      <>
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-info float-end" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </>
    );
  }
}

export default spinner;
