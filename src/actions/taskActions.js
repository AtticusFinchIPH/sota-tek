import { ADD_TASK, REMOVE_TASKS, UPDATE_TASK } from '../constants/taskConstants';

const addTask = (task) => (dispatch) => {
    dispatch({
        type: ADD_TASK,
        payload: task
    })
}

const updateTask = (task) => (dispatch) => {
    dispatch({
        type: UPDATE_TASK,
        payload: task
    })
}

const removeTasks = (tasks) => (dispatch) => {
    dispatch({
        type: REMOVE_TASKS,
        payload: tasks
    })
}

export { addTask, updateTask, removeTasks };