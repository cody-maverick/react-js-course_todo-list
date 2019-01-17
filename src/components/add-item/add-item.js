import React, { Component } from "react";

import './add-item.css';

export default class AddItem extends Component {

  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })        
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label)
  }

  render() {
    return (
      <form
        className="item-add-form d-flex"
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder = "What needs to be done"
        />
        <button
          className="btn btn-outline-secondary"          
        >Add Item</button>
      </form>
    )

  }
}