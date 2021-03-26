

import './NewTask.css';
import TaskForm from './TaskForm';

const NewTask = () => {
    const today = new Date();
    const date = `${today.getDate()}`.length === 1 ? `0${today.getDate()}` : `${today.getDate()}`;
    const month = `${today.getMonth()}`.length === 1 ? `0${today.getMonth()}` : `${today.getMonth()}`;
    const todayFormatted = `${today.getFullYear()}-${month}-${date}`;
    const defaultTask = {
        title: '',
        desc: '',
        dueDate: todayFormatted,
        priority: 2
    }
    return (
        <div className="newTask container-md">
            <h2>New Task</h2>
            <TaskForm task={defaultTask} isNew={true} />
        </div>
    )
}
export default NewTask;