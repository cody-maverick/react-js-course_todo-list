import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  
  render() {

    const { onChangeSearch } = this.props

    return (
      <input type="text"
        className="form-control search-input"
        onChange={(e) => onChangeSearch(e.target.value)}
        placeholder="type to search" />
    );

  }
};
