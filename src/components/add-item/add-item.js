import React, { Component } from "react";

import './add-item.css';

export default class AddItem extends Component {
  render() {
    return (
      <div className="item-add-form">
        <button
          className="btn btn-outline-secondary"
          onClick = {() => this.props.onAddItem('Hello')}
        >Add Item</button>
      </div>
    )

  }
}