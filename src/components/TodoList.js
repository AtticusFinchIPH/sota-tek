import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskForm from './TaskForm';
import './TodoList.css';
import { removeTasks } from '../actions/taskActions';

const TaskBar = ({task}) => {
    const dispatch = useDispatch();
    const [detailActive, setDetailActive] = useState(false);
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
    return (
        <div className="todoList__taskbar">
            <div className="todoList__resume">
                <label className="tdl__resume__label">   
                    <input 
                        className="tdl__resume__checkbox"
                        type="checkbox"
                    />
                    <span className="tdl__resume__span">{task.title}</span> 
                </label>
                <div className="tdl__resume__buttons">
                    <button 
                        className="tdl__resume__button__detail"
                        onClick={handleDetail}
                    >
                        Detail
                    </button>
                    <button 
                        className="tdl__resume__button__remove"
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
    const tasks = useSelector(state => state.tasks)
                .sort((task1, task2) =>{
                    const time1 = (new Date(task1.dueDate)).getTime();
                    const time2 = (new Date(task2.dueDate)).getTime();
                    return time1 - time2;
                });
    console.log(tasks)
    const [search, setSearch] = useState('');
    const changeSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }
    return (
        <div className="todoList container-md">
            <h2>Todo List</h2>
            <div className="todoList__content">
                <input 
                    className="todoList__search"
                    type="text" required={true} placeholder="Search ..."
                    name="tdl__input__search"
                    value={search}
                    onChange={changeSearch}
                />
                {
                    tasks.map((task) => <TaskBar key={task.id} task={task} />)
                }
            </div>
        </div>
    )
}

export default TodoList;