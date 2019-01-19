import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';

import './app.css';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodiItem('Drink Coffee'),
      this.createTodiItem('Make Awesome App'),
      this.createTodiItem('Have a lunch')
    ],
    searchValue: ''
  }

  createTodiItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }


  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray
      }
    })
  };

  addItem = (text) => {
    const newItem = this.createTodiItem(text);

    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ]

      return {
        todoData: newArr
      }
    })
  }


  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];

  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onChangeSearch = (value) => {
    // let newArray = [];
    // newArray = this.state.todoData.filter((el) => {
    //   let fullLabel = el.label.toLowerCase(),
    //     valueLowerCase = value.toLowerCase()
    //   return fullLabel.indexOf(valueLowerCase) > -1;
    // })
    // return newArray;
    this.setState({
      searchValue: value
    })
  }

  searchFunc = (arr, value) => {
    if (value.length === 0) {
      return arr
    } else {
      return arr.filter((item) => {
        return item.label.toLowerCase().indexOf(value.toLowerCase())> -1
      })
    }
  }

  render() {

    const { todoData, searchValue } = this.state;
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;
    const searchReslt = this.searchFunc(todoData, searchValue)


    return (
      <div className="todo-app" >
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel
            onChangeSearch={this.onChangeSearch}
          />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={searchReslt}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItem
          onAddItem={this.addItem}
        />
      </div>
    )
  }

};