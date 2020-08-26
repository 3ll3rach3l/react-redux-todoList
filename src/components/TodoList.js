import React from 'react';
import Task from './Task';
// TODO: Import the application's Redux store instance
import store from '../store';
// TODO: Import the `deleteTask` action creator function
import {deleteTask} from '../actions/taskActions';

class TodoList extends React.Component {
  componentDidMount() {
    // TODO: Use `store.subscribe` to force an update when the state changes
    // TODO: Name the subscription as `this.unsubscribe`
    this.unsubscribe = store.subscribe(()=>{
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    // TODO: Check if `this.unsubscribe` is defined
    // TODO: If its defined, invoke `this.unsubscribe`
    if (this.unsubscribe) this.unsubscribe();
  }

  deleteTask = (id) => {
    // TODO: Invoke `deleteTask` based on an `id` input
    //       and dispatch a 'DELETE_TASK' action
    store.dispatch(deleteTask(id))
  }

  render() {
    // TODO: Get the tasks stored in state with the `getState` method
    // const tasksState = Object.values(store.getState())
    // TODO: Use debugger to view state
    //debugger
    // TODO: If there are no tasks stored in state, return `null`.
    const tasksState = store.getState()
    const tasks = Object.values(tasksState)
    if(tasks.length === 0) return null;

    return (
      <ul>
        {tasks.map((task) => (
              <Task
                key={task.id}
                deleteTask={this.deleteTask}
                task={task}
              />
            ))}
      </ul>
      // <ul>{tasksState.map(task => <Task key={task.taskId} deleteTask={this.deleteTask} task={task}/>)}
      //   {/*
      //     TODO: Render a `Task` component for each of the tasks stored in state
      //     <Task key={this.task.id} deleteTask={this.deleteTask} task={someShit} />
      //     TODO: Pass the `this.deleteTask` method as a `deleteTask` prop
      //   */}
      // </ul>
    );
  }
} 

export default TodoList;
