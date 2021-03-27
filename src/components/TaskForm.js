
import { forwardRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './NewTask.css';
import './TaskForm.css';
import { addTask, updateTask } from '../actions/taskActions';

const TaskForm = ({task, isNew, closeDetail}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(task.title);
    const [desc, setDesc] = useState(task.desc);
    const [dueDate, setDueDate] = useState(task.dueDate instanceof Date ? task.dueDate : Date.parse(task.dueDate));
    const [priority, setPriority] = useState(task.priority);
    const changeTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    }
    const changeDesc = (e) => {
        e.preventDefault();
        setDesc(e.target.value);
    }
    const changeDueDate = (date) => {
        console.log(date)
        setDueDate(date);
    }
    const changePriority = (e) => {
        e.preventDefault();
        setPriority(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isNew) {
            dispatch(addTask({ id: Math.random(), title, desc, dueDate, priority }));
            setTitle('');
            setDesc('');
            setDueDate(new Date())
            setPriority(2);
        } else {
            dispatch(updateTask({ id: task.id, title, desc, dueDate, priority }));
            closeDetail();
        }
    }
    const CustomDateInput = forwardRef(
        ({ value, onClick }, ref) => (
            <input 
                type='text' readOnly={true}
                onClick={onClick} ref={ref} value={value}
                style={{ height: '40px'}}
            />
        ),
    );
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
                <div className="customDatePickerWidth">
                    <DatePicker
                        dateFormat="d MMM yyyy"
                        minDate={new Date()}
                        selected={dueDate}
                        onChange={changeDueDate}
                        customInput={<CustomDateInput />}
                    />
                </div>
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