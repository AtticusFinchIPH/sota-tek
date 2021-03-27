

import './NewTask.css';
import TaskForm from './TaskForm';

const NewTask = () => {
    const defaultTask = {
        title: '',
        desc: '',
        dueDate: new Date(),
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