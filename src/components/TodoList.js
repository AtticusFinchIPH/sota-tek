import { useSelector } from 'react-redux';

const TodoList = () => {
    const tasks = useSelector(state => state.tasks);
    console.log(tasks)
    return (
        <div className="todoList container-md">
            <h2>Todo List</h2>  
        </div>
    )
}

export default TodoList;