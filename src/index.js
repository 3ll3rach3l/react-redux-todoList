import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// TODO: Import the application's Redux store instance
import store from './store';
// TODO: Import the `createTask` and `deleteTask` action creator functions
import {createTask, deleteTask} from './actions/taskActions';

// TODO: Set the `store` to the window
window.store = store;
// TODO: Set the `createTask` function to the window
window.createTask = createTask;
// TODO: Set the `deleteTask` function to the window
window.deleteTask = deleteTask;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
