import React from 'react';

const SearchPanel = () => {
  const searchText = 'Введите название';
  const searchStyle = {
    fontSize: '20px'
  };
  return <input type="search" placeholder={searchText} style={searchStyle} />
};

export default SearchPanel;