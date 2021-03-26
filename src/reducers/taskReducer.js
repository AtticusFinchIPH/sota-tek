import { ADD_TASK, REMOVE_TASKS } from '../constants/taskConstants';

function tasksReducer (state = JSON.parse(localStorage.getItem('tasks')) || [], action) {
    let newTasks;
    switch (action.type) {
        case ADD_TASK:
            newTasks = [...state, action.payload];
            localStorage.setItem('tasks', JSON.stringify(newTasks));
            return newTasks;
        case REMOVE_TASKS:
            const removeArray = action.payload;
            newTasks = state.filter(task => !removeArray.some((item) => { 
                if (
                    item.title === task.title &&
                    item.desc === task.desc &&
                    item.dueDate === task.dueDate &&
                    item.priority === task.priority               
                ) return true;
                else return false;
            }))
            localStorage.setItem('tasks', JSON.stringify(newTasks));
            return newTasks;
        default:
            return state;
    }
}

export { tasksReducer };