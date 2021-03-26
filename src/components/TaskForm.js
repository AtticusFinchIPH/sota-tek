
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './NewTask.css';
import './TaskForm.css';
import { addTask } from '../actions/taskActions';

const TaskForm = ({task, isNew}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(task.title);
    const [desc, setDesc] = useState(task.desc);
    const [dueDate, setDueDate] = useState(task.dueDate);
    const [priority, setPriority] = useState(task.priority);
    const today = new Date();
    const date = `${today.getDate()}`.length === 1 ? `0${today.getDate()}` : `${today.getDate()}`;
    const month = `${today.getMonth()}`.length === 1 ? `0${today.getMonth()}` : `${today.getMonth()}`;
    const todayFormatted = `${today.getFullYear()}-${month}-${date}`;
    const changeTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    }
    const changeDesc = (e) => {
        e.preventDefault();
        setDesc(e.target.value);
    }
    const changeDueDate = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        setDueDate(e.target.value);
    }
    const changePriority = (e) => {
        e.preventDefault();
        setPriority(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isNew) {
            dispatch(addTask({ title, desc, dueDate, priority }));
            setTitle('');
            setDesc('');
            setDueDate(todayFormatted);
            setPriority(2);
        }
    }
    return (
        <form className="taskForm" onSubmit={handleSubmit}>
            <input 
                className="taskForm__title"
                type="text" required={true} placeholder="Add new task ..."
                name="tf__input__title"
                value={title}
                onChange={changeTitle}
            />
            <div className="taskForm__desc flex-column">
                <label htmlFor="tf__textarea__desc"><b>Description</b></label>
                <textarea 
                    name="tf__textarea__desc"
                    rows="8"
                    value={desc}
                    onChange={changeDesc}
                />
            </div>
            <div className="taskForm__date flex-column">
                <label htmlFor="tf__input__date"><b>Due Date</b></label>
                <input 
                    type="date" placeholder="Add new task ..."
                    name="tf__input__date"
                    min={todayFormatted}
                    value={dueDate}
                    onChange={changeDueDate}
                />
            </div>
            <div className="taskForm__prio flex-column">
                <label htmlFor="tf__select__prio"><b>Priority</b></label>
                <select
                    name="tf__select__prio"
                    value={priority}
                    onChange={changePriority}
                    style={{ height: '40px'}}
                >
                    <option value="1">High</option>
                    <option value="2">Normal</option>
                    <option value="3">Low</option>
                </select>
            </div>
            {
                isNew
                ?
                <button
                    className="taskForm__add"
                    type="submit"
                >
                    Add
                </button>
                :
                <button
                    className="taskForm__update"
                    type="submit"
                >
                    Update
                </button>
            }
        </form>
    )
}

export default TaskForm;