import { ADD_TASK } from '../constants/taskConstants';

const addTask = (task) => (dispatch) => {
    dispatch({
        type: ADD_TASK,
        payload: task
    })
}

export { addTask };