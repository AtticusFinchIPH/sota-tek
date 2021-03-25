
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './NewTask.css';
import { addTask } from '../actions/taskActions';

const NewTask = () => {
    const dispatch = useDispatch();
    const today = new Date();
    const date = `${today.getDate()}`.length === 1 ? `0${today.getDate()}` : `${today.getDate()}`;
    const month = `${today.getMonth()}`.length === 1 ? `0${today.getMonth()}` : `${today.getMonth()}`;
    const todayFormatted = `${today.getFullYear()}-${month}-${date}`;
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [dueDate, setDueDate] = useState(todayFormatted);
    const [priority, setPriority] = useState(2);
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
        dispatch(addTask({ title, desc, dueDate, priority }));
    }
    return (
        <div className="newTask container-md">
            <h2>New Task</h2>
            <form className="newTask__form" onSubmit={handleSubmit}>
                <input 
                    className="newTask__title"
                    type="text" required={true} placeholder="Add new task ..."
                    name="nt__input__title"
                    value={title}
                    onChange={changeTitle}
                />
                <div className="newTask__desc flex-column">
                    <label htmlFor="nt__textarea__desc"><b>Description</b></label>
                    <textarea 
                        name="nt__textarea__desc"
                        rows="8"
                        value={desc}
                        onChange={changeDesc}
                    />
                </div>
                <div className="newTask__date flex-column">
                    <label htmlFor="nt__input__date"><b>Due Date</b></label>
                    <input 
                        type="date" placeholder="Add new task ..."
                        name="nt__input__date"
                        value={dueDate}
                        onChange={changeDueDate}
                    />
                </div>
                <div className="newTask__prio flex-column">
                    <label htmlFor="nt__select__prio"><b>Priority</b></label>
                    <select
                        name="nt__select__prio"
                        value={priority}
                        onChange={changePriority}
                        style={{ height: '40px'}}
                    >
                        <option value="1">High</option>
                        <option value="2">Normal</option>
                        <option value="3">Low</option>
                    </select>
                </div>
                <button
                    className="newTask__add"
                    type="submit"
                >
                    Add
                </button>
            </form>
        </div>
    )
}
export default NewTask;