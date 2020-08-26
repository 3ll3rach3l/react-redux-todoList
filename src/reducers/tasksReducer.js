// TODO: Import `CREATE_TASK` and `DELETE_TASK` string literal constants
import{CREATE_TASK, DELETE_TASK, RESET_TASK_LIST} from '../actions/taskActions';

const tasksReducer = (state = {}, action) => {
  // TODO: Freeze the state
  Object.freeze(state)
  let nextState = Object.assign({ ...state });
  
  // TODO: Define switch case for routing 'CREATE_TASK' actions and 'DELETE_TASK' actions
  switch (action.type){
    case CREATE_TASK:
      //debugger;     
      const newTask ={
        id: action.taskId,
        message: action.taskMessage
      };
      nextState[action.taskId] = newTask;
      return nextState;

    case DELETE_TASK:
      
      delete nextState[action.taskId];
      return nextState;

    case RESET_TASK_LIST:
      return {};  

    default:
      return state; 


  }
};

export default tasksReducer;
