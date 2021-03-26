import { ADD_TASK, REMOVE_TASKS } from '../constants/taskConstants';

const addTask = (task) => (dispatch) => {
    dispatch({
        type: ADD_TASK,
        payload: task
    })
}

const removeTasks = (tasks) => (dispatch) => {
    dispatch({
        type: REMOVE_TASKS,
        payload: tasks
    })
}

export { addTask, removeTasks };