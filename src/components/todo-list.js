import React from 'react';

import ToDoListItem from './todo-list-item';

const ToDoList = () => {
  return (
    <ul>
      <li>
        <ToDoListItem label="Drink Coffee"/>
      </li>
      <li>
        <ToDoListItem label="Create App" />
      </li>
    </ul>
  );
};

export default ToDoList;