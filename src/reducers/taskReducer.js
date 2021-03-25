import { ADD_TASK } from '../constants/taskConstants';

function tasksReducer (state = [], action) {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload];    
        default:
            return state;
    }
}

export { tasksReducer };