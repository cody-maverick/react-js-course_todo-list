import React from 'react';
import ReactDOM from 'react-dom';

const ToDoList = () => {
  const items = ['Learn React', 'Build Apps'];
  return (
    <ul>
      <li>
        {items[0]}
      </li>
      <li>
        {items[1]}
      </li>
    </ul>
  );
}

const AppHeader = () => {
  return <h1>My Todo-list</h1>
}

const SearchPanel = () => {
  return <input type="search" placeholder="search" />
}

const App = () => {
  
  const isLoggedIn = false;
  const loginBox = <span>Log in please</span>

  return (
    <div>
      {isLoggedIn ? null : loginBox}
      <AppHeader />
      <SearchPanel />
      <ToDoList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


