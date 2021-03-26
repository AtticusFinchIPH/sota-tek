import { ADD_TASK, REMOVE_TASKS, UPDATE_TASK } from '../constants/taskConstants';

function tasksReducer (state = JSON.parse(localStorage.getItem('tasks')) || [], action) {
    let newTasks;
    switch (action.type) {
        case ADD_TASK:
            newTasks = [...state, action.payload];
            localStorage.setItem('tasks', JSON.stringify(newTasks));
            return newTasks;
        case UPDATE_TASK:
            const editedTask = action.payload;
            const index = state.findIndex(task => task.id === editedTask.id);
            state.splice(index, 1, editedTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case REMOVE_TASKS:
            const removeArray = action.payload;
            newTasks = state.filter(task => !removeArray.some((item) => { 
                return task.id === item.id;
            }))
            localStorage.setItem('tasks', JSON.stringify(newTasks));
            return newTasks;
        default:
            return state;
    }
}

export { tasksReducer };