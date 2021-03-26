import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskForm from './TaskForm';
import './TodoList.css';
import { removeTasks } from '../actions/taskActions';

const TaskBar = ({task, handleBulkTasks}) => {
    const dispatch = useDispatch();
    const [detailActive, setDetailActive] = useState(false);
    const [checked, setChecked] = useState(false);
    let todoListDetailClass = `todoList__detail`;
    if (detailActive) {
        todoListDetailClass += ' detail-active';
    } else {
        todoListDetailClass = todoListDetailClass.replace(' detail-active', '');
    }
    const handleDetail = () => {
        setDetailActive(isActive => !isActive);
    }
    const handleRemove = () => {
        dispatch(removeTasks([task]))
    }
    const handleCheck = () => {
        handleBulkTasks(task, !checked)
        setChecked(!checked);
    }
    return (
        <div className="todoList__taskbar">
            <div className="todoList__resume">
                <label className="tdl__resume__label">   
                    <input 
                        className="tdl__resume__checkbox"
                        type="checkbox"
                        checked={checked}
                        onChange={handleCheck}
                    />
                    <span className="tdl__resume__span">{task.title}</span> 
                </label>
                <div className="tdl__resume__buttons">
                    <button 
                        className="tdl__resume__button background_sky_blue"
                        onClick={handleDetail}
                    >
                        Detail
                    </button>
                    <button 
                        className="tdl__resume__button background_red"
                        onClick={handleRemove}
                    >
                        Remove
                    </button>
                </div>
            </div>
            <div className={todoListDetailClass}>
                <TaskForm task={task} isNew={false} closeDetail={() => handleDetail()} />
            </div>
        </div>
    )
}

const TodoList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks)
                .sort((task1, task2) =>{
                    const time1 = (new Date(task1.dueDate)).getTime();
                    const time2 = (new Date(task2.dueDate)).getTime();
                    return time1 - time2;
                });
    const [search, setSearch] = useState('');
    const [bulkTasks, setBulkTasks] = useState([]);
    const changeSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }
    const handleBulkTasks = (task, isContained) => {
        if (isContained) {
            const index = bulkTasks.findIndex(item => item.id === task.id);
            if (index < 0) setBulkTasks(list => [...list, task]);
        } else {
            setBulkTasks(list => list.filter(item => item.id !== task.id));
        }
    }
    const handleRemove = () => {
        dispatch(removeTasks(bulkTasks))
    }
    return (
        <div className="todoList container-md">
            <h2>To Do List</h2>
            <div className="todoList__content">
                <input 
                    className="todoList__search"
                    type="text" required={true} placeholder="Search ..."
                    name="tdl__input__search"
                    value={search}
                    onChange={changeSearch}
                />
                {
                    tasks.map((task) => <TaskBar key={task.id} task={task} handleBulkTasks={handleBulkTasks}/>)
                }
            </div>
            <div className="todoList__bulk background_gray">
                <p>Bulk Action:</p>
                <div className="tdl__resume__buttons">
                    <button 
                        className="tdl__bulk__button background_ocean_blue"
                    >
                        Done
                    </button>
                    <button 
                        className="tdl__bulk__button background_red"
                        onClick={handleRemove}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoList;