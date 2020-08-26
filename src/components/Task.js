import React from 'react';


// TODO: Take in `deleteTask` method and `task` object as props
const Task = ({task, deleteTask}) => {
  const handleClick = () => {
    // TODO: Delete task
    deleteTask(task.id)
  }

  return (
    <li>
      <h1>{task.message}</h1>
      <button onClick={handleClick}>Delete Task</button>
    </li>
  );
}

export default Task;
