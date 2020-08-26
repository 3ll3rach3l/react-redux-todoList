// TODO: Define `CREATE_TASK` constant
// TODO: Define `DELETE_TASK` constant
export const CREATE_TASK = 'CREATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const RESET_TASK_LIST = 'RESET_TASK_LIST';

// TODO: Define `createTask` action creator function
export const createTask = taskMessage => {
    //debugger;
    return ({
        type: CREATE_TASK,
        taskId: new Date().getTime(),
        taskMessage,
    });

};


// TODO: Define `deleteTask` action creator function
export const deleteTask = taskId =>({
    type: DELETE_TASK,
    taskId,
});

export const resetTask = () => ({
    type: RESET_TASK_LIST,
});
